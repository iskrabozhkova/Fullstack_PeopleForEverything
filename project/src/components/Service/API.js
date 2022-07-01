import axios from "axios";

export const getCategories = () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8080/api/auth/login",
  });
};
export async function createPost(post) {
  const postsResp = await fetch("http://localhost:8080/api/adverts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const postCreated = await postsResp.json();
  if (postsResp.status >= 400) {
    //error status code
    console.log("Error creating Post:", postCreated);
    throw postCreated.message;
  }
  console.log("POST created successfully", postCreated);
  return postCreated;
}
export async function findAllPosts() {
  const postsResp = await fetch("http://localhost:8080/api/adverts");
  const postsFound = await postsResp.json();
  return postsFound;
}
