import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure to import Bootstrap CSS

function MovieDetails() {
  const { id } = useParams();
  const [selectedMovie, setMovie] = useState("");
  const apiKey = '51332553af25d914f56ee5c20e1b4499';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Err', error);
      });
  }, [id]);
  

  return (
    <div className="container">
      <div className="row justify-content-center">
        {selectedMovie ? (
          <div className="col-12">
            <div className="row">
              <div className="col-md-4">
                <div className='img m-auto'width="90%" >
                <img 
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} 
                  alt={selectedMovie.title} 
                  className="img-fluid"
                  width={"100%"}
                  height={"auto%"}
                />
                </div>
              </div>
              <div className="col-md-8">
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
                <p> <span className='bg-danger p-1'>Date movie: {selectedMovie.release_date}</span></p>
                <p><span className='bg-danger p-1'>Rate: {selectedMovie.vote_average}</span></p>
                <small className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, non. Error ducimus, molestias fugit commodi earum esse cum, ratione necessitatibus, quae ullam praesentium expedita molestiae! Molestiae veritatis et architecto omnis.</small>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
