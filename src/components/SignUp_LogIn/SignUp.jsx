import React from 'react';
import './SignUp_LogIn.scss';

import { Routes, Route, Link } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';

export default function SignUp() {
  return (
    <section className="sign-up">
      <form>
        <Link to="/index" className="close"></Link>
        <h3>Welcome to Fox Library</h3>
        <label htmlFor="username">
          Username
          <input type="text" id="username" />
        </label>
        <label htmlFor="birthdate">
          Your birthdate
          <input type="date" id="birthdate" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" />
        </label>
        <button>Sign Up</button>
      </form>
      <div className="bg-clr"></div>
      <Routes>
        <Route path="/index" element={<StartPage />} />
      </Routes>
    </section>
  );
}
