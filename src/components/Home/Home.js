import { React, useState, useEffect } from 'react'
import styles from './Home.module.css'
import Movie from '../Movie/Movie'
const Home = () => {

  let items = [
    { name: 'Item 1', description: 'Item one is good', id: '121' },
    { name: 'Item 2', description: 'Item two is good', id: '122' },
    { name: 'Item 3', description: 'Item two is good', id: '123' },
    { name: 'Item 4', description: 'Item two is good', id: '124' },
    { name: 'Item 5', description: 'Item two is good', id: '125' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 7', description: 'Item two is good', id: '127' },
  ]
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(items.map((item) => {
      return <Movie name={item?.name} description={item?.description} id={item?.id} handleClick={handleClick}></Movie >
    }))
  }, [])
  
  const handleClick = async (id) => {
  }

  return (<>
    <div className={styles.main}>
      <div className={styles.items} onClick={handleClick}>
        {movies}
      </div>
    </div>
  </>
  )
}

export default Home