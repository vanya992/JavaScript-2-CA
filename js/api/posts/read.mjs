
import { API_SOCIAL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
    const getPostURL = `${API_SOCIAL}${action}`;

    const response = await authFetch(getPostURL)

   return await response.json();
}

export async function getPost(id) {

    if (!id) {
        throw new Error("Get requires a postID")
    }

    const getPostURL = `${API_SOCIAL}${action}/${id}`;

    const response = await authFetch(getPostURL)

    return await response.json();

    console.log(post);
};
    