import React from 'react';
import '../styles/App.scss';

import Header from './Header/Header';
import StartPage from './StartPage/StartPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <StartPage /> */}
      <Footer />
    </div>
  );
}

export default App;
