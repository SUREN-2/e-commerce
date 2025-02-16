import { CookieOptions, Response } from "express"
import { config } from "../config/app.config";
import { calculateExpirationDate } from "./get-time";

type CookiePayloadT = {
    res: Response;
    refreshToken : string;

};

export const REFRESH_PATH = `${config.BASE_PATH}/auth/refreshToken`

const defaults: CookieOptions = {
    httpOnly: true,
    //sameSite: config.NODE_ENV === "production" ? "strict" : "lax",
}

export const getAccessTokenCookieOptions = (): CookieOptions => {
    const expiresIn = config.JWT.EXPIRES_IN
    const expires = calculateExpirationDate(expiresIn);
    return {
        ...defaults,
        expires,
        path : "/"
    }
}


export const getRefreshTokenCookieOptions = (): CookieOptions => {
    const expiresIn = config.JWT.REFRESH_EXPIRES_IN
    const expires = calculateExpirationDate(expiresIn)
    return {
        ...defaults,
        expires,
        path: REFRESH_PATH
    }
}


export const setAuthenticationCookies = ({res,refreshToken}: CookiePayloadT): Response =>
    res.cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions())




export const clearAuthenticationCookies = (res: Response): Response => 
    res.clearCookie("refreshToken",{
        path: REFRESH_PATH
    })