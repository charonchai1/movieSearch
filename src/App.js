import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

const App = () => {
  const API_URL = "http://www.omdbapi.com?apikey=b2b05ffe";

  
  const [movies, setMovies] = useState([]);
  const [searchTerms,setSeartchTerms] = useState('')

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("mission");
  }, []);

  return (
    <div className="app">
      <h1>MOVIE CLUB</h1>
      <div className="search">
        <input placeholder="Search Movie" 
        value= {searchTerms}
        onChange={(e) => setSeartchTerms(e.target.value)} />

        <img src={SearchIcon} 
        onClick={() => searchMovie(searchTerms)} />


      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((props) => (
            <MovieCard props={props} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movie</h2>
        </div>
      )}
    </div>
  );
};

export default App;
