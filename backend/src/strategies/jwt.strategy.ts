// import {
//   ExtractJwt,
//   Strategy as JwtStrategy,
//   StrategyOptionsWithRequest,
// } from "passport-jwt";
// import { UnauthorizedExecption } from "../utils/catch-error";
// import { ErrorCode } from "../enums/error-code.enum";
// import { config } from "../config/app.config";
// import passport, { PassportStatic } from "passport";
// import { getCurrentUserService } from "../modules/user/user.service";
// // import { userService } from "../modules/user/";

// interface JwtPayload {
//   userId: string;
//   sessionId: string;
// }

// const options: StrategyOptionsWithRequest = {
//   jwtFromRequest: ExtractJwt.fromExtractors([
//     (req) => {

      
//       const accessToken = req.headers.authorization.split(" ")[1];

//       console.log(`Extract ${accessToken}`)
      
//       if (!accessToken) {
//         throw new UnauthorizedExecption(
//           "Unauthorized access token",
//           ErrorCode.AUTH_TOKEN_NOT_FOUND
//         );
//       }
//       return accessToken;
//     },
//   ]),
//   secretOrKey: config.JWT.SECRET,
//   audience: ["user"],
//   algorithms: ["HS256"],
//   passReqToCallback: true,
// };

// export const setupJwtStrategy = (passport: PassportStatic) => {
//   console.log('time ')
//   passport.use(
    
//     new JwtStrategy(
//       { ...options, passReqToCallback: true }, // Enable req in callback
//       async (req, payload: JwtPayload, done) => {
//       console.log("hiphip")
//       try {
//         const user = await getCurrentUserService(payload.userId);
//         if (!user) {
//           return done(null, false);
//         }
//         req.sessionId = payload.sessionId;
//         return done(null, user);
//       } catch (error) {

//         return done(error, false);
//       }
//     })
//   );
// };

// export const authenticateJWT = passport.authenticate("jwt", { session: false });