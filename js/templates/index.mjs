import * as postMethods from "../api/posts/index.mjs";
import { renderPostTemplates } from "./post.mjs";

export * from "./post.mjs"



// async function testTemplate() {
//     const posts = await postMethods.getPosts();
//     const post = posts.pop();
//     const container = document.querySelector("#post");
//     renderPostTemplates(posts, container);
// }

// testTemplate()


// async function testTemplate() {
//     const posts = await postMethods.getPosts();
//     const container = document.querySelector("#posts");
//     renderPostTemplates(posts, container)
// }

// testTemplate()