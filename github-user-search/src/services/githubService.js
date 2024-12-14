import axios from "axios";

// GitHub API User Search Endpoint
const GITHUB_API_URL = "https://api.github.com/users?q";

export const fetchUserData = async (username) => {
  try {
    // Make a GET request to GitHub API to fetch user data by username
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data; // Return the user data from the response
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Propagate error
  }
};
