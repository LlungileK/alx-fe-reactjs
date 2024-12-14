import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data; // Returns the full response object
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error; // Propagate the error
  }
};
