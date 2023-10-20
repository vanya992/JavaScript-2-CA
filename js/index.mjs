
import { setRegisterFormListener} from "../scripts/register.mjs";




// import * as templates from "./templates/post.mjs";





const path = location.pathname;


if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
} else if (path === '/post/edit/') {
    setUpdatePostListener()
} else if (path === '/post/create/') {
    setCreatePostListener()
} else if (path === "/profile/edit/") {
    setUpdateProfileListener()
}

