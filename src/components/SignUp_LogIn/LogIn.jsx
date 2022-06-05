import React from 'react';
import './SignUp_LogIn.scss';

import { Routes, Route, Link } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';

export default function LogIn() {
  return (
    <section className="log-in">
      <form>
        <Link to="/index" className="close"></Link>
        <h3>Log In to Fox Library</h3>
        <label htmlFor="username">
          Username
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" />
        </label>
        <button>Log In</button>
      </form>
      <div className="bg-clr"></div>
      <Routes>
        <Route path="/index" element={<StartPage />} />
      </Routes>
    </section>
  );
}
