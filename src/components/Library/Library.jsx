import React from 'react';
import '../UserInterface/UserInterface.scss';
import '../Library/Library.scss';
import LibraryBook from './LibraryBook/LibraryBook';
import Book from '../UserInterface/Book/Book';

export default function Library(props) {
  const bookData = [
    {
      id: '5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d',
      name: 'A promised land',
      author: 'Barack Obama',
      length: '768 pages',
      imageUrl:
        'https://res.cloudinary.com/intellectfox/image/upload/v1619686603/Diploma%20Front-end/Fox%20library/A%20promised%20land.jpg',
    },
    {
      id: 'bb5d77d1-7f4d-432c-a508-71dc8d7d3784',
      name: 'The Beer Bible',
      author: 'Jeff Alworth',
      length: '720 pages',
      released: '2015',
      imageUrl:
        'https://res.cloudinary.com/intellectfox/image/upload/v1619686979/Diploma%20Front-end/Fox%20library/The%20beer%20bible.jpg',
    },
    {
      id: '63ff4fbc-7c61-4037-91ef-7c325d45d349',
      name: 'Long Walk to Freedom',
      author: 'Nelson Mandela',
      length: '656 pages',
      released: '1994',
      imageUrl:
        'https://res.cloudinary.com/intellectfox/image/upload/v1619687799/Diploma%20Front-end/Fox%20library/Long%20Walk%20to%20Freedom.png',
    },
  ];
  console.log('i library');
  const LibraryBooks = bookData.map(b => (<LibraryBook id={b.id} name={b.name} author={b.author} img={b.imageUrl}/>))
  return (
    <div className="user-interface library">
      <div className="waiting-box books">
        <h6>All books</h6>
        {LibraryBooks}
      </div>
      <div className="btn-box">
        <button className="more">Show more</button>
      </div>
    </div>
  );
}
