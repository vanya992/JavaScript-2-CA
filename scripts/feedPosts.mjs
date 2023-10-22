import { POSTS } from "./constants.mjs";
import { logOutButton } from "./logOut.mjs";
import { POSTS_FLAG } from "./constants.mjs";

logOutButton()

 const token = localStorage.getItem("token");

 
 async function fetchAndDisplayPosts() {
     try {
         const response = await fetch(POSTS + POSTS_FLAG, {
             method: 'GET',
             headers: {
                 'Content-Type': "application/json",
                 'Authorization': `Bearer ${token}`,
             },
         });

         if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
         }

         const data = await response.json();

         const postsDiv = document.getElementById('posts');
         postsDiv.innerHTML = '';

         data.forEach(post => {
             const postElement = document.createElement('div');
             const imageHtml = post.media ? `<img src="${post.media}" class="img-thumbnail">` : '';
             postElement.innerHTML = `<a href="../profile/post/index.html?id=${post.id}"><h1>${post.author.name}</h1><h2>${post.title}</h2><p>${post.body}</p> ${imageHtml}</a><div>
             <button class="btn btn-primary"></i>Like <i class="bi bi-heart-fill"></i> </button>  <button class="btn btn-primary">Comment <i class="bi bi-chat-fill"></i></button><hr>`;
             postsDiv.appendChild(postElement);
         });
     } catch (error) {
         console.error('Error fetching posts:', error);
     }
 }


fetchAndDisplayPosts();


