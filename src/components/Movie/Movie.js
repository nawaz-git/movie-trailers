import React from 'react'
import { useState } from 'react'
import movieStyle from './Movie.module.css'

const Movie = ({ name, description, id, handleClick }) => {
    const [state, setstate] = useState(false)
    return (
        <>
            <div className={movieStyle.main} onClick={event => handleClick(id)}>
                <span>{name}</span>
            </div>
        </>
    )
}

export default Movie