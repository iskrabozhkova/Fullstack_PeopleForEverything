import axios from "axios"

export const register = (user) => {
    return axios({
        method: "POST",
        data: user,
        withCredentials: true,
        url: "http://localhost:8080/api/auth/register"
    })
}


export const login = (user) => {
    return axios({
        method: "POST",
        data: user,
        withCredentials: true,
        url: "http://localhost:8080/api/auth/login"
    })
}