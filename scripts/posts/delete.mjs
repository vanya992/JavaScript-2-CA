import { API_SOCIAL_BASE } from "../constants.mjs";

const action = "/posts";


export async function deletePost(postId) {
 console.log(postId)
    if (!postId) {
      console.error('Post ID not provided in URL.');
      return;
    }

  const token = localStorage.getItem("token")
 
    try {
      const response = await fetch(`${API_SOCIAL_BASE}${action}/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
      },
      });
      console.log(response)
      if (response.status === 200) {
    
        alert('Post deleted successfully.');
        
      } else {
       
        alert('Failed to delete the post. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the post:', error);
    }
  }
  
  
export function deletePostEventListener(event) {
  if (event.target.classList.contains('delete-post')) {
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      const postId = event.target.getAttribute('data-postId');
      deletePost(postId);
    }
  }
}



  
  


