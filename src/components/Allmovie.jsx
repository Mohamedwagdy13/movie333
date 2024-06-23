import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function MovieApp() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const apiKey = '51332553af25d914f56ee5c20e1b4499';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, [page]);

    const handlePageChange = (event) => {
        const pageNumber = parseInt(event.target.value, 10);
        if (!isNaN(pageNumber) && pageNumber > 0) {
            setPage(pageNumber);
        }
    };

    return (
        <div style={{ backgroundColor: '#rgba(0, 0, 0, 0.85)', minHeight: '100vh', padding: '20px', color: 'white' }}>
            <div>
                <label style={{ color: 'white' }}>Enter Page Number: </label>
                <input type="number" min="1" onChange={handlePageChange} value={page} />
            </div>
            <div className="row mt-3">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div className="col-md-3 mb-3" key={movie.id}>
                            <div className="card bg-dark text-light">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="card-img-top"
                                    style={{ borderRadius: '10%' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-danger">View Details</Link>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default MovieApp;
