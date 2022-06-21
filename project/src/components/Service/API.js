import axios from "axios"

// export const register = (user) => {
//     return axios({
//         method: "POST",
//         data: user,
//         withCredentials: true,
//         url: "http://localhost:8080/api/auth/register"
//     })
//     .then(res => {
//         console.log(res);
//         console.log(res.config.data);
//        // console.log(res.config);
//     })
// }


// export const login = (user) => {
//     return axios({
//         method: "POST",
//         data: user,
//         withCredentials: true,
//         url: "http://localhost:8080/api/auth/login"
//     })
//     .then(res => console.log(res))
// }
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
// export const createAd = (ad) => {
//     return axios({
//         method: "POST",
//         withCredentials: true,
//         data: ad,
//         url: "http://localhost:8080/api/adverts"
//     })
// }

// export async function createAd(ad) {
//     const adResp = await fetch(
//         "http://localhost:8080/api/adverts",
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(ad)
//         }
//     );
//     const adCreated = await adResp.json();
//     return adCreated;
// }
export async function createPost(post) {
    const postsResp = await fetch(
        "http://localhost:8080/api/adverts",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }
    );
    const postCreated = await postsResp.json();
    if(postsResp.status >= 400) { //error status code
        console.log("Error creating Post:", postCreated);
        throw(postCreated.message);
    }
    console.log("POST created successfully", postCreated);
    return postCreated;
}
export async function findAllPosts() {
    const postsResp = await fetch(
        "http://localhost:8080/api/adverts"
    );
    const postsFound = await postsResp.json();
    // console.log(postsFound);
    return postsFound;
}