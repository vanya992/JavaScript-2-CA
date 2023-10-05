// import * as constants from "./api/constants.mjs"

// console.log(constants.API_REGISTER);


import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";



const path = location.pathname;


if (path === '/profile/login/index.html') {
    setLoginFormListener();
} else if ('path === /profile/register/index.html') {
    setRegisterFormListener();
};

