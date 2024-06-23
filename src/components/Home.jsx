import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = '51332553af25d914f56ee5c20e1b4499';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch(error => {
        console.error('err', error);
      });
  }, []);

  return (
    <div className="container bg-dark p-5">
      <div className="row bg-dark">
        <h2 className="text-center text-light mb-4">Movie trends</h2>

        {popularMovies.map(movie => (
          <div className="col-md-4 mb-4 bg-dark" key={movie.id}>
            <div className="hov p-1">
              <div className="card bg-dark">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                  alt={movie.original_title} 
                  className="hove card-img-top"
                />
                <div className="text1">
                  <div className="content text-light">
                    <h4 className="card-title">{movie.original_title}</h4>
                    <p className="card-text">{movie.original_language}</p>
                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-danger">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
