# 💬 CineStream Development Prompts & AI Assistance Log

This file documents the structured prompt engineering workflow used during the development of CineStream, balancing theory, architectural decision-making, and core code logic snippets.

---

## 1. Project Initialization & Vite Setup

**User Prompt:**  
> "Explain why Vite is preferred over Create React App (CRA) for modern React development and show the terminal commands to initialize a React app using Vite."

**AI Response Summary:**  
Vite uses native ES modules (ESM) to deliver lightning-fast Cold Server Starts and instant Hot Module Replacement (HMR), whereas CRA relies on Webpack bundling which slows down as the project grows.

```bash
# Terminal Commands
npm create vite@latest cine-stream-app -- --template react
cd cine-stream-app
npm install
npm run dev
```

---

## 2. API Key Security & Environment Configuration

**User Prompt**:
"How do we store environment variables securely in Vite? Give a 7-8 line example demonstrating how to define and access an OMDB API key in React."

**AI Response Summary**:
Vite requires environment variables to start with the VITE_ prefix to prevent unintended leakage of sensitive server keys to the client bundle.

```JavaScript
// .env file
VITE_OMDB_API_KEY=your_omdb_api_key_here

// src/services/omdbApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = '[https://www.omdbapi.com/](https://www.omdbapi.com/)';

export const fetchMovies = (searchQuery) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchQuery}`);
};
```

---

## 3. Dynamic Image Fallback Mechanism

**UserPrompt**:
"How do we gracefully handle missing movie posters (N/A) or broken image URLs in React? Provide a code snippet with an onError handler."

**AI Response Summary**:
OMDB API returns the string "N/A" when a poster is missing. We evaluate this condition using a ternary operator and attach an onError event handler to switch to a fallback image if the original URL fails to load.

```JavaScript
// src/components/MovieCard.jsx
const MovieCard = ({ movie, onSelectMovie }) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : '[https://via.placeholder.com/300x450?text=No+Poster](https://via.placeholder.com/300x450?text=No+Poster)';

  return (
    <div className="movie-card" onClick={() => onSelectMovie(movie.imdbID)}>
      <img 
        src={posterUrl} 
        alt={movie.Title} 
        onError={(e) => { e.target.src = '[https://via.placeholder.com/300x450?text=Image+Error](https://via.placeholder.com/300x450?text=Image+Error)'; }} 
      />
      <h3>{movie.Title}</h3>
    </div>
  );
};
```

---

## 4. Modal State Management & Details Fetching

**UserPrompt**:
"How do we implement a details modal overlay in React that fetches full movie plot and IMDb ratings based on selected ID?"

**AI Response Summary**:
We maintain a state variable (selectedMovieId) in App.jsx. When a card is clicked, the modal opens and triggers an API fetch using i=${imdbID}&plot=full

```JavaScript
// src/components/MovieDetailsModal.jsx snippet
useEffect(() => {
  if (selectedId) {
    axios.get(`[https://www.omdbapi.com/?apikey=$](https://www.omdbapi.com/?apikey=$){API_KEY}&i=${selectedId}&plot=full`)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.error(err));
  }
}, [selectedId]);
```

---

## 5. CSS Custom Variables for Netflix Dark Theme

**UserPrompt**:
"What are the advantages of using CSS Custom Variables for dark mode design systems? Give a brief code example."

**AI Response Summary**:
CSS custom variables allow central color management across the application, making contrast adjustments and theme switching modular and maintainable without rewriting class rules.

```CSS
/* src/index.css */
:root {
  --bg-primary: #141414;
  --bg-card: #1f1f1f;
  --text-primary: #ffffff;
  --accent-red: #e50914;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

---
