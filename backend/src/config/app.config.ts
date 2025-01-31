import {getEnv} from "../utils/get-env"


const appConfig = () => ({
    APP_ORIGIN : getEnv("APP_ORIGIN",  "localhsot"),
    BASE_PATH : getEnv("BASE_PATH","api/v1"),
    NODE_ENV : getEnv("NODE_ENV","development"),
    PORT : getEnv("PORT", "5000"),
    MONGO_URI : getEnv("MONGO_URI",),


})


export const config = appConfig();