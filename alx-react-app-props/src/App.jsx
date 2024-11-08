import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile'; 
import { useState } from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const userData = { name: "Jane Doe", email: "Jane.doe@example.com"};

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <Footer />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div><h1>Vite + React</h1><div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App