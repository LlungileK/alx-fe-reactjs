import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(["posts"], fetchPosts, {
    staleTime: 5000, // Data is considered fresh for 5 seconds
    cacheTime: 10000, // Data is cached for 10 seconds after it's unused
    refetchOnWindowFocus: false, // Prevent refetching when the window gains focus
    keepPreviousData: true, // Show previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) {
    return (
      <div>
        <p style={{ color: "red" }}>Error fetching posts: {error.message}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

