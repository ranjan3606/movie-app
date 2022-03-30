import { Chip } from "@material-ui/core";
import axios from "axios"
import {useEffect} from 'react'

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,                 
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    


    const API_KEY = "f31e0f4ffe84de1c3f0f4e97c6195426";
    const fetchGenres = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
            );
        
        setGenres(data.genres)

    }


    useEffect(() => {

        fetchGenres()

        return () => {
            setGenres({})
        }
    }, [])
    return(
        <div 
            style={{padding: "6px 0"}}
         
        >
            {selectedGenres &&
                selectedGenres.map((genre) => (
                    <Chip 
                    label={genre.name} 
                    size="small"
                    style={{margin: 2}} 
                    key={genre.id}
                    clickable 
                    onDelete={() => handleRemove(genre)}
                    />
                ))}

            {genres &&
                genres.map((genre) => (
                    <Chip 
                    label={genre.name} 
                    size="small"
                    style={{margin: 2}} 
                    key={genre.id}
                    clickable 
                    onDelete={() => handleAdd(genre)}
                    />
                ))}
        
        </div>
    )
}

export default Genres