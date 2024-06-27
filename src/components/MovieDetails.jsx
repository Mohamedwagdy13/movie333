import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetails() {
  const { id } = useParams();
  const [selectedMovie, setMovie] = useState(null); // Changed to null for better initial state
  const apiKey = '51332553af25d914f56ee5c20e1b4499';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching the movie details:', error);
      });
  }, [id, apiKey]); // Added apiKey to dependencies

  return (
    <div className="container">
      <div className="row justify-content-center">
        {selectedMovie ? (
          <div className="col-12">
            <div className="row">
              <div className="col-md-4">
                <div className="img m-auto" style={{ width: "90%" }}>
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} 
                    alt={selectedMovie.title} 
                    className="img-fluid"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
                <p><span className="bg-danger p-1">Release Date: {selectedMovie.release_date}</span></p>
                <p><span className="bg-danger p-1">Rating: {selectedMovie.vote_average}</span></p>
                <p><span className="bg-danger p-1">Genres: {selectedMovie.genres.map(genre => genre.name).join(', ')}</span></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle={{marginTop: '20px', border: '2px solid red'}}
              wrapperClass="container"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
