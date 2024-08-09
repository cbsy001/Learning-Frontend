// src/components/Books.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Books.module.css'; // Import CSS module

const Books = ({ category }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://192.168.12.81:5000/api/books/${category}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={fetchBooks} className={styles.button}>
        {loading ? 'Loading...' : 'F#tch Books'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {books.length > 0 ? (
        <ul className={styles.list}>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No books available</p>
      )}
    </div>
  );
};

export default Books;
