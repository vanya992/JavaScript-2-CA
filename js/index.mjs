
import * as listeners from "./handlers/index.mjs";




import * as templates from "./templates/post.mjs";





const path = location.pathname;


if (path === '/profile/login/') {
    listeners.setLoginFormListener();
} else if (path === '/profile/register/') {
    listeners.setRegisterFormListener();
} else if (path === '/post/edit/') {
    listeners.setUpdatePostListener();
} else if (path === '/post/create/');

