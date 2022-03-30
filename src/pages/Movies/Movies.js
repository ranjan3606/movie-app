import axios from "axios"
import {useState, useEffect} from 'react'
import useGenre from "../../hooks/useGenres";
import Genres from '../../components/genres/Genres'
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';

const Movies = () => {
    const API_KEY = "f31e0f4ffe84de1c3f0f4e97c6195426";
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])


    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        )
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        fetchMovies()
    }, [ page])

    return(
        <div>
            <span className="pageTitle">Movies</span>
            <Genres 
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trading">
            {content &&
                content.map(({id, poster_path, title, name, first_air_date, release_date, vote_average}) => (
                    <SingleContent
                    key={id}
                    poster={poster_path}
                    title={title || name}
                    date={first_air_date || release_date}
                    media_type="movie"
                    vote_average={vote_average}
                    />
                ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies

