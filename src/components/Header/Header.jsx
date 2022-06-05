import React from 'react';
import './Header.scss';
import SvgSelector from '../modules/ico';
import { Routes, Route, Link } from 'react-router-dom';

import SignUp from '../SignUp_LogIn/SignUp';
import LogIn from '../SignUp_LogIn/LogIn';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <SvgSelector name="logo" />
        <div className="search">
          <SvgSelector name="loupe" />
          <input type="text" placeholder="Search by author, title, name" />
        </div>
      </div>
      <div className="header-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </header>
  );
}
