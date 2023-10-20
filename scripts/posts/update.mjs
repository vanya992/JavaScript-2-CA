import { API_SOCIAL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";


export async function updatePost(postData) {
    if (!postData.id) {
    throw new Error("Update requires postID")
}

    const updatePostURL = `${API_SOCIAL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method: "put",
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post);
};