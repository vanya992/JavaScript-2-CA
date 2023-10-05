import { login } from "../forms/login.mjs"

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");
    console.log("Hi hi");

    if (form) {
        form.addEventListener("submit", (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        console.log(profile);

        login(profile);

})
    }
    
};