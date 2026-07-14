import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

// import del context per il loader
import { useGlobal } from "../contexts/GlobalContext";




function HomePage(){

    // prendiamo dal context il valore che ci serve
    const {setIsLoading} = useGlobal();

    // funzione di disattivazione loader
    const loadingFalse = () => {
    // settiamo il loading attivo
    setIsLoading(false)
    }

    // creiamo la variabile di stato
    const [movies, setMovies] = useState([]);

    // definizione funzione per chiamata ajax a backend
    const fetchMovies = () => {
        // settiamo il loading attivo
        setIsLoading(true);

        axios.get("http://localhost:3000/api/movies")
        .then(response => { setMovies(response.data)})
        .catch(err => {
            console.log(err);
        })
        .finally(setTimeout(loadingFalse, 1500))
    }

    useEffect(() => {
    fetchMovies();
  }, []);

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
    
    
    return (
        <>
            <h1 className="text-danger">Movies</h1>
            <h2><i>Movie community</i></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {renderMovies()}
            </div>
        </>
    )
}
export default HomePage;