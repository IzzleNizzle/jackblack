import React from 'react';
import logo from './logo.svg';
import { MyProvider } from './AppContext';
import CardList from './components/CardList';
import SeeWhoWins from './components/SeeWhoWins';
import './App.css';

function App() {
  return (
    <div>
      <MyProvider>
        <CardList />
        <SeeWhoWins />
        {/* <CardList /> */}
      </MyProvider>
    </div>
  );
}

export default App;
