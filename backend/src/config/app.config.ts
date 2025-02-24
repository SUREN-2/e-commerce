import {getEnv} from "../utils/get-env"


const appConfig = () => ({
    APP_ORIGIN : getEnv("APP_ORIGIN",  "localhsot"),
    BASE_PATH : getEnv("BASE_PATH","/api/v1"),
    NODE_ENV : getEnv("NODE_ENV","development"),
    PORT : getEnv("PORT", "5000"),
    MONGO_URI : getEnv("MONGO_URI",),
    JWT: {
        SECRET: getEnv("JWT_SECRET"),
        EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
        REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
        REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "30d"),
        USE_AUTH: getEnv("JWT_USE_AUTH", "true"),
      },
   


})


export const config = appConfig();