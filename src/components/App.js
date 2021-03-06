import React from 'react';
import '../styles/App.scss';

import Header from './Header/Header';
import StartPage from './StartPage/StartPage';
import Footer from './Footer/Footer';
import UserInterface from './UserInterface/UserInterface';
import Library from './Library/Library';

function App() {
  return (
    <div className="App">
      <Header />
      <StartPage />
      <Library/>
      <UserInterface />
      <Footer />
    </div>
  );
}

export default App;
