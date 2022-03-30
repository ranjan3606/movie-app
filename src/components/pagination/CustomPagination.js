import React from 'react'
import { Pagination } from '@mui/material'



const CustomPagination = ({setPage, numOfPages = 1000}) => {
    const handleChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }

    return (
        <div 
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10
            }}
        >
            <Pagination
            count={numOfPages}
            onChange={(e) => handleChange(e.target.textContent)} 
            hideNextButton
            hidePrevButton
            color="primary"
            />
        </div>
    )
}

export default CustomPagination
