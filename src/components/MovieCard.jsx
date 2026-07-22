import React from 'react';

const MovieCard = ({ movie, onSelectMovie }) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div style={styles.card} onClick={() => onSelectMovie(movie.imdbID)}>
      <img 
        src={posterUrl} 
        alt={movie.Title} 
        style={styles.poster} 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
        }}
      />
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.Title}</h3>
        <p style={styles.year}>{movie.Year} • {movie.Type?.toUpperCase()}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    border: '1px solid #333'
  },
  poster: {
    width: '100%',
    height: '320px',
    objectFit: 'cover'
  },
  info: {
    padding: '1rem'
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '0.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  year: {
    fontSize: '0.85rem',
    color: '#aaa'
  }
};

export default MovieCard;