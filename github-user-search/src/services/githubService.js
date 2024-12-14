import axios from "axios";

// GitHub API Search Endpoint
const GITHUB_API_URL = "https://api.github.com/search/users";

export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string
    let query = "";
    
    // Add username search (only in login field)
    if (username) query += `${username} in:login`; 

    // Add location search
    if (location) query += ` location:${location}`;

    // Add minimum repositories search
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Construct full API URL with query
    const apiUrl = `${GITHUB_API_URL}?q=${query}`;

    // Fetch data from GitHub API
    const response = await axios.get(apiUrl);
    return response.data; // Return the response data containing the users

  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error; // Propagate the error to handle it elsewhere
  }
};
