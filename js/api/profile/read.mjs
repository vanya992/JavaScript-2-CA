
import { API_SOCIAL_BASE } from "../../../scripts/constants.mjs";

import { authFetch } from "./";

const action = "/profiles";

export async function getProfiles() {
    const getProfileURL = `${API_SOCIAL_BASE}${action}`;

    const response = await authFetch(getProfileURL)

   return await response.json();
}

export async function getProfile(name) {

    if (!name) {
        throw new Error("Get requires a name")
    }

    const getProfileURL = `${API_SOCIAL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    return await response.json();

};
    