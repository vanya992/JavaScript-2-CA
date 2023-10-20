import { API_SOCIAL } from "../../scripts/constants.mjs"

const action = "/auth/register";

export async function register(profile) {
    const registerURL = API_SOCIAL + action;
    const body = JSON.stringify(profile);

   const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body
   })
    
    const result = await response.json();

    alert("You are now registered!");
    return result;
}