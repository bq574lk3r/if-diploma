import React from 'react';
import '../Book/Book.scss';
import '../../img/book-cover/Rectangle 26cover.png';

export default function Book() {
  return (
    <div className="book">
      <div className="book-cover">
        <img
          src="https://res.cloudinary.com/intellectfox/image/upload/v1619686603/Diploma%20Front-end/Fox%20library/A%20promised%20land.jpg"
          alt="obama"
        />
      </div>
      <p className='bookname'>A promised land by Barack Obama</p>
      <div className="rating-area">
        <label for="star-5" title="Оценка «5»">
          <input type="radio" id="star-5" name="rating" value="5" />
        </label>
        <label for="star-4" title="Оценка «4»">
          <input type="radio" id="star-4" name="rating" value="4" />
        </label>
        <label for="star-3" title="Оценка «3»">
          <input type="radio" id="star-3" name="rating" value="3" />
        </label>
        <label for="star-2" title="Оценка «2»">
          <input type="radio" id="star-2" name="rating" value="2" />
        </label>
        <label for="star-1" title="Оценка «1»">
          <input type="radio" id="star-1" name="rating" value="1" />
        </label>
      </div>
      <button className='btn-chk-status'>Check status</button>
    </div>
  );
}
