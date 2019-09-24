import React from 'react';
import logo from './logo.svg';
import { MyProvider } from './AppContext';
import CardList from './components/CardList';
import SeeWhoWins from './components/SeeWhoWins';
import './App.css';
import LikeButton from 'feedbackizzle'

function App() {
  return (
    <div>
      <MyProvider>
        <CardList />
        <SeeWhoWins />
        <LikeButton />
      </MyProvider>
    </div>
  );
}

export default App;
