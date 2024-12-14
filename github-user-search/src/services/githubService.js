import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string
    let query = "";
    if (username) query += `${username} in:login`; // Search username in login field
    if (location) query += ` location:${location}`; // Filter by location
    if (minRepos) query += ` repos:>=${minRepos}`; // Filter by minimum repository count

    // Make the API request
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error; // Propagate the error
  }
};
