import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'

const queryClient = new QueryClient();

function App() {

   return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
