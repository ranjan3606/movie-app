import React, { useState, useEffect } from 'react'
import axios from "axios"
import SingleContent from '../../components/singleContent/SingleContent'

import "./Trading.css"

import CustomPagination from '../../components/pagination/CustomPagination'

const Trading = () => {
    const API_KEY = "f31e0f4ffe84de1c3f0f4e97c6195426";

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
        );
        setContent(data.results)
    };

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <div>
            <span className="pageTitle">Trading</span>
            <div className="trading">
                {
                    content && content.map(({ id, poster_path, title, name, first_air_date, release_date, vote_average, media_type }) => (
                        <SingleContent
                            key={id}
                            poster={poster_path}
                            title={title || name}
                            date={first_air_date || release_date}
                            media_type={media_type}
                            vote_average={vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trading