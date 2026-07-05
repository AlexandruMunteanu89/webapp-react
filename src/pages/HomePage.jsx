import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function HomePage(){
    // creiamo la variabile di stato
    const [movies, setMovies] = useState([]);

    // definizione funzione per chiamata ajax a backend
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
        .then(response => { setMovies(response.data)})
        .catch(err => {
            console.log(err);
        })
    }
    // definizione funzione renderng per card movies
    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie}/>
                </div>
            )
        })
    }
    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className="text-danger">Movies</h1>
            <h2><i>Movie community</i></h2>
            <div className="row row-cols-3 mt-4">
                {renderMovies()}
            </div>
        </>
    )
}
export default HomePage