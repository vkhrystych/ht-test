// THIS SHOULD BE STORED AS ENV VARIABLES
// PREFERRABLY ON GITHUB/AWS (NOT IN REPO BUT IN SECRETS)
const BASE_URL = "https://dummyjson.com";

export const API = {
  get: async (target: string) => {
    const response = await fetch(`${BASE_URL}${target}`);

    if (!response?.ok) {
      console.warn("Request Failed!", response);
    }

    return await response.json();
  },
  // WE SHOULD PROBABLY MAP OTHER METHODS HERE (POST/PUT/PATCH etc.)
  // BUT FOR THE SAKE OF TIME I EXCLUDED THEM FROM MY SUBMISSION
};
