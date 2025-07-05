import axios from "axios";

const api = axios.create({
    baseURL: process.env.BACKEND_URL || "http://localhost:3001",
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export { api };