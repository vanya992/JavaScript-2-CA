import { API_SOCIAL_BASE } from "../constants.mjs";

const action = "/posts";



async function deletePost(postId) {
    try {
      const response = await fetch(`${API_SOCIAL_BASE}${action}/${postId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
    
        alert('Post deleted successfully.');
        
      } else {
       
        alert('Failed to delete the post. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the post:', error);
    }
  }
  
  
  export function addDeleteButtonEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-post');
  
    deleteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const postId = event.currentTarget.getAttribute('data-postId');
        const confirmDelete = confirm('Are you sure you want to delete this post?');
  
        if (confirmDelete) {
          await deletePost(postId);
        }
      });
    });
  }
  
  