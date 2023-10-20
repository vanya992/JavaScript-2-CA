import { POSTS } from "../constants.mjs";
import { POSTS_FLAG } from "../constants.mjs";


function displaySinglePost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
  
    if (!postId) {
      console.error('Post ID not provided in URL.');
      return;
    }
  
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Authentication token is missing.');
      return;
    }
  
    fetch(`${POSTS}/${postId}?_author=true`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the specific post.');
        }
          console.log(response)
        return response.json();
      })
        .then((post) => {   
            const postContainer = document.getElementById('singlePost');
           
            if (post) {
                const imageHtml = post.media ? `<img src="${post.media}" class="img-thumbnail">` : ''
                postContainer.innerHTML = `
                  <div class="d-flex justify-content-between">
                    <h1>${post.author.name}</h1>
                    <div>
                      <button class="btn btn-light delete-post" data-postId="${post.id}">Delete Post</button>
                      <button class="btn btn-light">Edit Post</button>
                    </div>
                  </div>
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
                  ${imageHtml} 
                  <p>Created at: ${post.created}</p>
                  <p>Updated at: ${post.updated}</p>
                `;
        } else {
          postContainer.innerHTML = '<p>Post not found.</p>';
        }
      })
      .catch((error) => {
        console.error('Error fetching the specific post:', error);
      });
  }
  
  displaySinglePost();
  
  