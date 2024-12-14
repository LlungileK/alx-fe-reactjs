import axios from "axios";

// Function to fetch user data based on the search term
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  const query = `user:${username} location:${location} repos:>${minRepos}`;
  
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
