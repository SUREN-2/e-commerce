import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";
import { UserDocument } from "../database/models/user.model";
import { SessionDocument } from "../database/models/session.model";
import { config } from "../config/app.config";



export type AccessTPayload = {
  userId: UserDocument["_id"];
  sessionId: SessionDocument["_id"];
};

export type RefreshTPayload = {
  sessionId: SessionDocument["_id"];
};

type SignOptsAndSecret = SignOptions & {

  secret: string;
};

const defaults: SignOptions = {
  audience: ["user","admin","vendor"],
};

export const accessTokenSignOptions: SignOptsAndSecret = {
  expiresIn: "15m",
  secret: config.JWT.SECRET,
};

export const refreshTokenSignOptions: SignOptsAndSecret = {
  expiresIn: "30d",
  secret: config.JWT.REFRESH_SECRET,
};
export const signJwtToken = (
  payload: AccessTPayload | RefreshTPayload,
  options?: SignOptsAndSecret
) => {
  const { secret, ...opts } = options || accessTokenSignOptions;

  
 
  return jwt.sign(payload, secret, {
    ...defaults,
    ...opts,
  });
};


export const verifyJwtToken = <TPayload extends object = AccessTPayload>(
  token: string,
  options?: VerifyOptions & { secret?: string }
) => {
  try {
    const secret = options?.secret || config.JWT.SECRET;
    
    const payload = jwt.verify(token, secret, {
      ...defaults,
      ...options,
    }) as TPayload;
    
    return { payload };
  } catch (err: any) {
   
    return {
      error: err.message,
    };
  }
};