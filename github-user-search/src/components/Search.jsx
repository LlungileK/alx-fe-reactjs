import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // Input field value
  const [userData, setUserData] = useState(null); // Fetched user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Call the API
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering for API Call States */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {userData && (
        <div className="border rounded shadow p-4 text-center">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-bold">{userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
