import { getProfile, updateProfile } from "../api/profile/index.mjs"; 

import { load } from "../storage/index.mjs"

export async function setUpdateProfileListener() {
    const form = document.querySelector("#editProfile");
   
    
    
    if (form) {
        const { name, email } = load("profile")

        const button = form.querySelector("button");
        button.disabled = true;

        const profile = await getProfile(name);

        form.name.value = name;
        form.email.value = email;
        form.banner.value = profile.banner;
        form.avatar.value = profile.avatar;

        button.disabled = false;
        
        form.addEventListener("submit", (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            
            profile.name = name;
            profile.email = email;

        updateProfile(profile)

})
    }
    
};