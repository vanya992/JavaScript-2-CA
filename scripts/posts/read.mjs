
import { API_SOCIAL_BASE } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
    const getPostURL = `${API_SOCIAL_BASE}${action}`;

    const response = await authFetch(getPostURL)

   return await response.json();
}

export async function getPost(id) {

    if (!id) {
        throw new Error("Get requires a postID")
    }

    const getPostURL = `${API_SOCIAL_BASE}${action}/${id}`;

    const response = await authFetch(getPostURL)

    return await response.json();

};
    