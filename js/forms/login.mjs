import { API_SOCIAL } from "../api/constants.mjs";
import * as storage from "../storage/index.mjs";

const action = "/auth/login";

export async function login(profile) {
  const loginURL = API_SOCIAL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
  alert("You are now logged in!");
}
