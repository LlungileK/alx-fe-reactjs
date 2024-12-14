import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      // Call the fetchUserData function to get user data from GitHub API
      const data = await fetchUserData(username);
      setUser(data); // Set the user data to display
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

      {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {user && (
        <div className="mt-6 p-4 border rounded-md shadow">
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
      )}
    </div>
  );
};

export default Search;
