import { POSTS } from "../constants.mjs";
import { POSTS_FLAG } from "../constants.mjs";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

function updatePost(editPostId) {
  const token = localStorage.getItem("token");
  const postContainer = document.getElementById("updatePost");

  if (!editPostId) {
    console.error("Post ID not provided in URL.");
    return;
  }

  fetch(`${POSTS}/${editPostId}${POSTS_FLAG}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch the specific post.");
      }
      return response.json();
    })
    .then((post) => {
      const editForm = document.createElement("form");
      editForm.classList.add("form-control");
      editForm.innerHTML = `
        <input class="form-control m-2" type="text" id="edit-title" value="${post.title}">
        <textarea class="form-control m-2" id="edit-body">${post.body}</textarea>
        <button class="btn btn-light m-2" id="save-edit" data-postId="${post.id}">Save Changes</button>
      `;

      const saveEditButton = editForm.querySelector("#save-edit");
      saveEditButton.addEventListener("click", () => {
        const editedTitle = editForm.querySelector("#edit-title").value;
        const editedBody = editForm.querySelector("#edit-body").value;

        fetch(`${POSTS}/${post.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: editedTitle,
            body: editedBody,
          }),
        })
          .then((updateResponse) => {
            if (!updateResponse.ok) {
              throw new Error("Failed to update the post.");
            }
            return updateResponse.json();
          })
          .then((updatedPost) => {
            console.log("Post updated:", updatedPost);

            alert("Post updated successfully");

            window.location.href = `../index.html?=${postId}`;
          })
          .catch((updateError) => {
            console.error("Error updating the post:", updateError);
          });

        editForm.remove();
      });

      postContainer.appendChild(editForm);
    })
    .catch((error) => {
      console.error("Error fetching the specific post:", error);
    });
}

updatePost(postId);
