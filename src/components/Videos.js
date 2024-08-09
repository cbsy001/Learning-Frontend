// src/components/Videos.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Videos.module.css'; // Import CSS module

const Videos = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVideos = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://192.168.12.81:5000/api/videos/${category}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to fetch videos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={fetchVideos} className={styles.button}>
        {loading ? 'Loading...' : 'Fetch Videos'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {videos.length > 0 ? (
        <ul className={styles.list}>
          {videos.map((video) => (
            <li key={video.id}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No videos available</p>
      )}
    </div>
  );
};

export default Videos;
