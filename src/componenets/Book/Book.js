import React from 'react';
import './bookStyle.css';
import { useNavigate } from 'react-router-dom';

const Book = ({ book, onDelete }) => {
  const history = useNavigate();

  const { _id, name, author, price, description, available, image } = book;

  const handleUpdate = () => {
    history(`/UpdateBook/${_id}`);
  };

  return (
    <div className="book-container">
      <img className="book-image" src={image} alt={book.title} />
      <div className="book-title">{name}</div>
      <div className="book-author">{author}</div>
      <div className="book-price">${price}</div>
      <p className="book-description">{description}</p>
      <p className="book-description">{available}</p>
      <div className='bookButtonBox'>
        <button onClick={handleUpdate} className="book-button-update"> Update Book </button>
        <button onClick={() => onDelete(_id)} className="book-button-delete">Delete Book</button>
      </div>
    </div>
  );
};

export default Book;