import React from 'react';
import '../styles/App.scss';

import Header from './Header/Header';
import StartPage from './StartPage/StartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <StartPage />
      <footer></footer>
    </div>
  );
}

export default App;
