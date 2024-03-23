import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
import './bookStyle.css';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const navigate = useNavigate();
  const URL = 'https://book-store-backend-n1sr.onrender.com/AllBooks';
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await axios.get(URL);
      setBooks(response.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`https://book-store-backend-n1sr.onrender.com/deleteById/${bookId}`).then(()=>{navigate('/AllBooks')});
      // After successful deletion, fetch all books again to update the books state
      getAllBooks();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks(); // Call the function directly
  }, []);

  return (
    <div>
      <ul className='bookshelf'>
        {books.map((book, i) => (
          <div key={i}>
            <Book book={book} onDelete={() => handleDeleteBook(book._id)} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;