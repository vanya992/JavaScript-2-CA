import { API_SOCIAL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";


export async function deletePost(id) {

    if (!id) {
        throw new Error("Delete requires a postID")
    }

    const deletePostURL = `${API_SOCIAL}${action}/${id}`;

    const response = await authFetch(deletePostURL, {
        method: "delete"
    })

    const post = await response.json();

    console.log(post);
};