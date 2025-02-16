import axios from "axios"


const BASE_URL = "http://localhost:8000/api/v1"

const options = {
    baseURL : "http://localhost:8000/api/v1",
    credentials: "include",
    withCredentials : true,
    timeout : 10000,
    headers: {
        "Content-Type": "application/json",
    },
};

export const API = axios.create(options)

