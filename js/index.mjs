
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import { authFetch } from "./api/authFetch.mjs";

import * as post from "./api/posts/create.mjs"

import * as posts from "./api/posts/index.mjs"



const path = location.pathname;


if (path === '/profile/login/index.html') {
    setLoginFormListener();
} else if ('path === /profile/register/index.html') {
    setRegisterFormListener();
};


createPost({
    title: "Example Post",
    body: "Also an example"
})
