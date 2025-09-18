import "./css/App.css";
import React, { useEffect } from 'react';
// import Search from './components/search';
import { useState } from 'react';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}


// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const [errorMessage, setErrorMessage] = useState('');

//   const fetchMovies = async () => {
//     try {
//       const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      
//       const response = await fetch(endpoint, API_OPTIONS);
      
//       if(!response.ok){
//         throw new Error('Failed to fetch movies');
//       }

//       const data = await response.json();

//       console.log(data);

//     } catch (error) {
//       console.error(`Error fetching movies: ${error}`);
//       setErrorMessage('Error fetching movies. Please try again later.')
//     }
//   }
  
//   useEffect(() => {

//   }, []);

//   return (
//     <main>

//       <div className='pattern' />
//       <div className='wrapper'>
//         <header>
//           <img src='./banner.png' alt='banner'></img>
//           <h1>Find <span className='text-gradient'>Movies</span> to watch</h1>
        
//           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

//         </header>

//         <section className='all-movies'>
//           <h2>All Movies</h2>

//           {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
//         </section>
        
//       </div>
//     </main>
//   )
// }

export default App