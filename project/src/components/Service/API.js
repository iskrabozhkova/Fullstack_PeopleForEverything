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
// export const addAd = (add) => {
//     return axios({
//         method: "POST",
//         data: add,
//         withCredentials: true,
//         url: "http://localhost:8080/api/advertisements"
//     })
// }

export const getCategories = () => {
    return axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:8080/api/auth/login"
    })
}
export const createAd = (ad) => {
    return axios({
        method: "POST",
        withCredentials: true,
        data: ad,
        url: "http://localhost:8080/api/adverts"
    })
}