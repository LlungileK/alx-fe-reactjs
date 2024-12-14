import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");  // Stores the username input
  const [users, setUsers] = useState([]);  // Stores the list of users when fetched
  const [loading, setLoading] = useState(false);  // Indicates if data is being fetched
  const [error, setError] = useState("");  // Stores any error messages

  // Handles the search action
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true when starting the search
    setError("");  // Clear previous error
    setUsers([]);  // Clear previous user data

    try {
      // Fetch user data from GitHub API (searching users)
      const data = await fetchUserData(username);
      setUsers(data.items);  // Set list of users if API call is successful
    } catch (err) {
      setError("Looks like we cant find the user");  // Set error message if no users found
    } finally {
      setLoading(false);  // Set loading to false after the API call completes
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}  // Updates the username input
            placeholder="Search by GitHub username"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading message */}
      {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}

      {/* Error message */}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Display User Information */}
      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-md shadow">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-center">{user.login}</h3>
              <p className="text-center text-sm text-gray-600">
                Location: {user.location || "Not specified"}
              </p>
              <p className="text-center text-sm text-gray-600">
                Repositories: {user.public_repos || "Not available"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 underline mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
