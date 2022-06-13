import React from 'react';
import './LibraryBook.scss';

export default function LibraryBook(props) {
  return (
    <div id= {props.id} className='library-book'>
      <div className='book-cover'>
        <img
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className='book-description'>
        <p className='book-status'>Available</p>
        <p className='book-holder'>kakoyto chelovek &nbsp;</p>
        <p className='book-title'>{props.name}</p>
        <p className='book-author'>{props.author}</p>
        <div className="rating-area">
          <label htmlFor="star-5" title="Оценка «5»">
            <input type="radio" id="star-5" name="rating" value="5" />
          </label>
          <label htmlFor="star-4" title="Оценка «4»">
            <input type="radio" id="star-4" name="rating" value="4" />
          </label>
          <label htmlFor="star-3" title="Оценка «3»">
            <input type="radio" id="star-3" name="rating" value="3" />
          </label>
          <label htmlFor="star-2" title="Оценка «2»">
            <input type="radio" id="star-2" name="rating" value="2" />
          </label>
          <label htmlFor="star-1" title="Оценка «1»">
            <input type="radio" id="star-1" name="rating" value="1" />
          </label>
        </div>
        <button className="btn-chk-status">Order</button>
      </div>
    </div>
  );
}
