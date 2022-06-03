import React, { Component } from 'react';
import '../header/header.scss';
import SvgSelector from '../../components/img/ico';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <SvgSelector name="logo" />
        <div className="search">
          <SvgSelector name="loupe" />{' '}
          <input type="text" placeholder="Search by author, title, name" />
        </div>
      </div>
      <div className="header-right">
        <a href="">Log in</a>
        <a href="">Sign in</a>
      </div>
    </div>
  );
}
