import { API_SOCIAL } from "../constants.mjs";

const action = "/posts";


export async function create(postData) {
    const createPostURL = API_SOCIAL + action;

    const response = await authFetch(createPostURL, {
        method: "post",
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post)
}