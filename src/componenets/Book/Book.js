import React from 'react';
import { Button } from '@mui/material';
import './bookStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Book = ({book}) => {
//   if (!props.book) {
//     // Handle the case when props.book is undefined
//     return null; // You can return a placeholder, message, or null as appropriate
//   }
  const history = useNavigate();
  const {
    _id,
    name,
    author,
    price,
    description,
    available,
    image
  } = book;

  const UpdateHandler = ()=>{
    history(`/UpdateBook/${_id}`);
  }

  const DeleteHandler = async() => {
    await axios.delete(`http://127.0.0.1:5000/deleteById/${_id}`).then(res=>res.data).then(()=>history("/AllBooks"));
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
    <button onClick={UpdateHandler}  className="book-button-update"> Update Book </button>
    <button onClick={DeleteHandler} className="book-button-delete">Delete Books</button>
    </div>
  </div>
  );
}

export default Book;