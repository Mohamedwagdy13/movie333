import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '51332553af25d914f56ee5c20e1b4499';

  const searchMovie = (movieName) => {
    if (movieName.length > 0) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
        .then(response => {
          setSearchResults(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container">
      <div className="my-4">
        <h2 className="text-center">Search for Movies</h2>
        <div className="d-flex justify-content-center">
          <input type="text" className="form-control w-50" placeholder="Enter movie name" onChange={(e) => searchMovie(e.target.value)} />
        </div>
      </div>

      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map(movie => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card bg-dark">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.original_title}
                  className="card-img-top"
                  style={{ borderRadius: '10%' }}
                />
                <div className="card-body">
                  <h5 className="card-title ">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 text-center">
            {searchResults.length === 0 && <p>No movies found.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
