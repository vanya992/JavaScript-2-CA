import { PROFILE } from "./constants.mjs";
import { POSTS } from "./constants.mjs";
import { addDeleteButtonEventListeners } from "./posts/delete.mjs";

const authorDisplay = '?_author=true';
import { logOutButton } from "./logOut.mjs";

logOutButton()
addDeleteButtonEventListeners()


  function displayUserProfile() {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('name');

    if (!token || !userName) {
      console.error('User is not authenticated.');
      return;
    }

    fetch(PROFILE + `/${userName}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user profile.');
        }
        return response.json();
      })
      .then((userData) => {
        if (userData) {
          const userProfile = document.getElementById('userProfile');
          const user = userData;
          const postsCount = userData._count.posts;
          const following = userData._count.following;
          const followers = userData._count.followers;


          const name = user.name;
          userProfile.innerHTML = `
      <div class="card-body d-flex justify-content-between">
           <h1><i>${name}</i></h1>
          <button class="btn btn-primary">Follow</button>
      </div>
  <div class="d-flex flex-row text-center justify-content-center">
      <div class="my-4 mx-3">
          <h5>Posts</h5>
          <h4>${postsCount}</h4>
      </div>
      <div class="my-4 mx-3">
          <h5>Following</h5>
          <h4>${following}</h4>
      </div>
      <div class="my-4 mx-3">
          <h5>Followers</h5>
          <h4>${followers}</h4>
      </div>
  </div>`;

          fetch(POSTS + authorDisplay, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Failed to fetch user posts.');
              }
              return response.json();
            })
            .then((userPosts) => {
              const postsList = document.getElementById('listOfPosts');
              const userPostsOnly = userPosts.filter(post => post.author.name === name);
              if (userPostsOnly.length > 0) {
                const posts = userPostsOnly.map(post => `
                  <div class="d-flex justify-content-between"><div><h2>${post.author.name}</h2></div></div>
                  <div>
                  <a href="../profile/post/edit/index.html?id=${post.id}"><h2>${post.title}</h2> 
                  <p>${post.body}</p></div></a>
                  <div>
                  <button class="btn btn-primary"></i>Like <i class="bi bi-heart-fill"></i> </button>  <button class="btn btn-primary">Comment <i class="bi bi-chat-fill"></i></button><hr>
              `);
                postsList.innerHTML = posts.join('');
              } else {
                postsList.innerHTML = '<p>No posts found for this user.</p>';
              }
            })
            .catch((error) => {
              console.error('Error fetching user posts:', error);
            });
        } else {
          console.error('No profile found for the user.');
        }
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }


displayUserProfile()

