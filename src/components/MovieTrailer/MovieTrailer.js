import React from 'react'
import movieStyle from './MovieTrailer.module.css'

const MovieTrailer = ({ trailername, description, id }) => {
    return (
        <div className={movieStyle.main}
        >{trailername}</div>
    )
}

export default MovieTrailer