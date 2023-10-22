import { LOGIN } from "./constants.mjs";

async function login(profile) {
  const loginURL = LOGIN;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();
      console.log(user);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("name", user.name);
      localStorage.setItem("profile", JSON.stringify(user));
      window.location.href = '/profile/index.html';
      alert("You are now logged in!");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
  }
}

const form = document.querySelector("#loginForm");

export function setLoginFormListener() {
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      console.log(profile);

      login(profile);
    });
  }
}

setLoginFormListener();
