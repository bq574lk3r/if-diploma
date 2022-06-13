import React from 'react';
import '../UserInterface/UserInterface.scss';
import Book from './Book/Book';

export default function UserInterface() {
  return (
    <div className="user-interface">
      <div className="waiting-box">
        <h6>Waiting for</h6>
        <Book />
        <Book />
        <Book />
      </div>
      <div className="books-box">
        <h6>List of your books</h6>
        <Book />
      </div>
    </div>
  );
}
