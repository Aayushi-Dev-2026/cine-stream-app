import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import { fetchMoviesBySearch, fetchMovieDetailsById } from './services/omdbApi';

function App() {
  const [searchTerm, setSearchTerm] = useState('Avengers');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchMoviesBySearch(query);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found.');
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  const handleSelectMovie = async (imdbID) => {
    try {
      const details = await fetchMovieDetailsById(imdbID);
      setSelectedMovie(details);
    } catch (err) {
      console.error('Failed to load movie details:', err);
    }
  };

  return (
    <div>
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleSearch={handleSearch} 
      />

      <main style={styles.container}>
        <h2 style={styles.heading}>Search Results for "{searchTerm}"</h2>

        {loading && <p style={styles.message}>Loading movies...</p>}
        {error && <p style={styles.errorMessage}>{error}</p>}

        {!loading && !error && (
          <div style={styles.grid}>
            {movies.map((movie) => (
              <MovieCard 
                key={movie.imdbID} 
                movie={movie} 
                onSelectMovie={handleSelectMovie} 
              />
            ))}
          </div>
        )}
      </main>

      {selectedMovie && (
        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '#aaa'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem'
  },
  message: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginTop: '3rem',
    color: '#aaa'
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginTop: '3rem',
    color: '#e50914'
  }
};

export default App;