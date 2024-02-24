import React from 'react';
import { Button } from '@mui/material';
import './bookStyle.css';
const Book = ({book}) => {
//   if (!props.book) {
//     // Handle the case when props.book is undefined
//     return null; // You can return a placeholder, message, or null as appropriate
//   }

  const {
    _id,
    name,
    author,
    price,
    description,
    available,
    image
  } = book;

  const changeToUpdate = ()=>{
    window.location.href = `/UpdateBook/${_id}`
  }

  return (
    <div className="book-container">
    <img className="book-image" src={image} alt={book.title} />
    <div className="book-title">{name}</div>
    <div className="book-author">{author}</div>
    <div className="book-price">${price}</div>
    <p className="book-description">{description}</p>
    <p className="book-description">{available}</p>
    <div className='bookButtonBox'>
    <button onClick={changeToUpdate}  className="book-button-update"> Update Book </button>
    <button className="book-button-delete">Delete Books</button>
    </div>
  </div>
  );
}

export default Book;