import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={styles.logoRed}>CINE</span>STREAM
      </div>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Search movies, series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#141414',
    borderBottom: '1px solid #333',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px'
  },
  logoRed: {
    color: '#e50914'
  },
  form: {
    display: 'flex',
    gap: '0.5rem'
  },
  input: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: '1px solid #333',
    backgroundColor: '#1f1f1f',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    width: '250px'
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#e50914',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Navbar;