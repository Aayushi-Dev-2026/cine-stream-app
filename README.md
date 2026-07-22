# 🎬 CineStream - Movie & Web Series Exploration Platform

CineStream is a high-performance, dark-themed React application designed for seamless movie discovery. Built with Vite and integrated with the OMDB API, it offers smooth dynamic searching, instant details modal inspection, and high-contrast Netflix-inspired UI presentation.

---

## ✨ Key Features

- 🔍 **Dynamic Search Integration**: Instant title search connected directly to the OMDB API database.
- 🍿 **Interactive Movie Modal**: Detailed breakdown including IMDb rating, actors, full plot summary, genre, and director.
- 🎨 **Netflix-Inspired UI**: Pure CSS custom variable theme with full responsiveness across mobile and desktop screens.
- 🖼️ **Graceful Fallback Handlers**: Automated fallbacks for missing posters (`N/A`) and broken external image URLs.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Framework**: React.js (Hooks & Functional Components)
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: Modern CSS3 (Flexbox, Grid, CSS Variables)
- **Version Control**: Git & GitHub

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory of the project:

```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

---

## 📦 Local Installation & Running Guide
### 1. Clone the Repository:
```bash
git clone [https://github.com/Aayushi-Dev-2026/cine-stream-app.git](https://github.com/Aayushi-Dev-2026/cine-stream-app.git)
cd cine-stream-app
```

---

### 2. Install Dependencies:
```bash
npm install
```

---

### 3. Start Development Server:

```bash
npm run dev
```

---

## 📸 Application Preview:
**Home Grid**: Dynamic card grid rendering movie titles, release years, and media categories.

---

**Details View**: Overlay modal rendering rich metadata fetched directly via IMDb IDs.

---