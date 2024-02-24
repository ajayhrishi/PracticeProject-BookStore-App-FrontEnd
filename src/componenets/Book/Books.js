import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
import './bookStyle.css';

const Books = () => {
  const URL = 'http://localhost:5000/AllBooks';
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await axios.get(URL);
      setBooks(response.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks(); // Call the function directly
  }, []);

  console.log(books);

  return (
    <div>
      <ul className='bookshelf'>
        {books.map((book, i) => (
          <div key={i}>
            <Book book={book} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;