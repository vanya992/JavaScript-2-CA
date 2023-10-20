import { API_SOCIAL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";


export async function updateProfile(profileData) {

    console.log(profileData)
    
    if (!profileData.name) {
    throw new Error("Update requires a name")
}

    const updateProfileURL = `${API_SOCIAL}${action}/${profileData.name}`;

    const response = await authFetch(updateProfileURL, {
        method: "put",
        body: JSON.stringify(profileData)
    })

    const post = await response.json();

    console.log(post);
};