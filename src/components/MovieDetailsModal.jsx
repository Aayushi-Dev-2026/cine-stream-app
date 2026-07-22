import React from 'react';

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
        <div style={styles.content}>
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'} 
            alt={movie.Title} 
            style={styles.poster} 
          />
          <div style={styles.details}>
            <h2>{movie.Title} <span style={styles.year}>({movie.Year})</span></h2>
            <p style={styles.genre}><strong>Genre:</strong> {movie.Genre}</p>
            <p style={styles.rating}>⭐ <strong>IMDb Rating:</strong> {movie.imdbRating} / 10</p>
            <p style={styles.plot}><strong>Plot:</strong> {movie.Plot}</p>
            <p style={styles.cast}><strong>Actors:</strong> {movie.Actors}</p>
            <p style={styles.meta}><strong>Director:</strong> {movie.Director}</p>
            <p style={styles.meta}><strong>Runtime:</strong> {movie.Runtime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#1f1f1f',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '700px',
    width: '90%',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
    border: '1px solid #333'
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  content: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  poster: {
    width: '220px',
    borderRadius: '6px',
    objectFit: 'cover'
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem'
  },
  year: {
    color: '#aaa',
    fontSize: '1.1rem'
  },
  genre: {
    color: '#e50914'
  },
  rating: {
    fontSize: '1rem'
  },
  plot: {
    color: '#ccc',
    lineHeight: '1.4',
    margin: '0.5rem 0'
  },
  cast: {
    fontSize: '0.9rem',
    color: '#aaa'
  },
  meta: {
    fontSize: '0.9rem',
    color: '#aaa'
  }
};

export default MovieDetailsModal;