import { API_SOCIAL_BASE } from "../constants.mjs";



const action = "/posts";
const token = localStorage.getItem("token")
 

export async function createPost(token, postData) {
    const headers = {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
    };
    const body = JSON.stringify(postData);

    try {
        const response = await fetch(`${API_SOCIAL_BASE}${action}`, {
            method: "POST",
            headers,
            body
        });

        if (response.ok) {
            console.log("Your post is successfully added.");
            return response.json();
            
        } else {
            throw new Error("There has been an error.")
        }
    } catch (error) {
        throw error;
    }
}



document.getElementById("postForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const postTitle = document.getElementById("postTitle").value;
    const postBody = document.getElementById("postBody").value;

    try {
        
        const newPost = await createPost(token, { title: postTitle, body: postBody });

       
        const postsContainer = document.getElementById("posts")
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <h2>${newPost.title}</h2>
            <p>${newPost.body}</p>
        `;
        postsContainer.appendChild(postElement);

        setTimeout(function () {
            location.reload();
          }, 200);
        document.getElementById("postTitle").value = "";
        document.getElementById("postBody").value = "";
    } catch (error) {
        console.log(error);
        alert("Error creating the post. Please try again.");
    }
    
});



