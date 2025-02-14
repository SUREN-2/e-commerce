import { config } from "../../config/app.config";
import SessionModel from "../../database/models/session.model";
import UserModel from "../../database/models/user.model";
import { ErrorCode } from "../../enums/error-code.enum";
import { LoginDto, RegisterDto } from "../../interface/auth.interface";
import { BadRequestException, UnauthorizedExecption } from "../../utils/catch-error";
import { calculateExpirationDate, ONE_DAY_IN_MS } from "../../utils/get-time";
import { accessTokenSignOptions, refreshTokenSignOptions, RefreshTPayload, signJwtToken, verifyJwtToken } from "../../utils/jwt";

export class AuthService{

    public async register(registerData : RegisterDto){
        const {name,password,email} = registerData


        const existingUser = await UserModel.exists({email});

        if(existingUser){
            throw new BadRequestException(
                "User already exists with this email.",
                ErrorCode.AUTH_EMAIL_ALREADY_EXISTS);
        }

        const new_user = await UserModel.create({
            name,
            email,
            password
        });

        console.log("User created succesfully")
    }

    public async login(loginData: LoginDto){
        const {email,password,userAgent} = loginData;

        const user = await UserModel.findOne({email})

        if(!user){
            throw new BadRequestException("User not found",ErrorCode.AUTH_USER_NOT_FOUND)
        }

        const isPasswordIsValid = user.comparePassword(password);

        if(!isPasswordIsValid){
            throw new BadRequestException("Invalid email or password provided",ErrorCode.AUTH_USER_NOT_FOUND)
        }


        const session = await SessionModel.create({
            userId: user._id,
            userAgent,
        })

        const accessToken  = signJwtToken({
            userId : user._id,
            sessionId: session._id,
        });



        const refreshToken = signJwtToken({
                sessionId: session._id,
        },refreshTokenSignOptions);



        return {user,accessToken,refreshToken};

    }

    public async refreshToken(refreshToken: string){
        const {payload} = verifyJwtToken<RefreshTPayload>(refreshToken, {
            secret : refreshTokenSignOptions.secret
        })

        if(!payload){
            throw new UnauthorizedExecption("Invalid Refresh token")
        }

        const session = await SessionModel.findById(payload.sessionId)
        const now = Date.now()

        if(!session){
            throw new UnauthorizedExecption("Session doesn`t exist")
        }

        if(session.expiredAt.getTime() <= now){
            throw new UnauthorizedExecption("Session Expired")
        }

        const sessionRequireRefresh = session.expiredAt.getTime() - now <= ONE_DAY_IN_MS
        

        if(sessionRequireRefresh){
            session.expiredAt = calculateExpirationDate(config.JWT.REFRESH_EXPIRES_IN)
            await session.save();
        }
        const newRefreshToken =  sessionRequireRefresh ? signJwtToken({
            sessionId : session._id
        },
           refreshTokenSignOptions
        ) : undefined


        const accessToken = signJwtToken({
            userId: session.userId,
            sessionId: session._id
        },accessTokenSignOptions)

        return {
            accessToken,newRefreshToken
        }
    }
}