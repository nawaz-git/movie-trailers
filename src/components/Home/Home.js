import { React, useState, useEffect } from 'react'
import styles from './Home.module.css'
import Movie from '../Movie/Movie'
import MovieTrailer from '../MovieTrailer/MovieTrailer'
import getFirstItemofRow from '../Helpers/getFirstRow'

const Home = () => {

  let items = [
    { name: 'Item 1', description: 'Item one is good', id: '121' },
    { name: 'Item 2', description: 'Item two is good', id: '122' },
    { name: 'Item 3', description: 'Item two is good', id: '123' },
    { name: 'Item 4', description: 'Item two is good', id: '124' },
    { name: 'Item 5', description: 'Item two is good', id: '125' },
    { name: 'Item 6', description: 'Item two is good', id: '126' },
    { name: 'Item 7', description: 'Item two is good', id: '127' },
    { name: 'Item 8', description: 'Item two is good', id: '128' },
    { name: 'Item 9', description: 'Item two is good', id: '129' },
    { name: 'Item 10', description: 'Item two is good', id: '1210' },
    { name: 'Item 11', description: 'Item two is good', id: '1211' },
    { name: 'Item 12', description: 'Item two is good', id: '1212' },
    { name: 'Item 13', description: 'Item two is good', id: '1213' },
    { name: 'Item 14', description: 'Item two is good', id: '1214' },
    { name: 'Item 15', description: 'Item two is good', id: '1215' },
    { name: 'Item 16', description: 'Item two is good', id: '1216' },
    { name: 'Item 17', description: 'Item two is good', id: '1217' },
    { name: 'Item 18', description: 'Item two is good', id: '1218' },
  ]
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(items.map((item) => {
      return <Movie name={item?.name} description={item?.description} id={item?.id} handleClick={handleClick} key={item.id}></Movie >
    }))
  }, [])

  const handleClick = async (item) => {
    let movie = { name: item.name, description: item.description, id: item.id, flag: true }


    items = items.filter((e) => {
      return e.flag === undefined
    })

    const insert = (arr, index, newItem) => [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index)
    ]

    let index;
    items.forEach((ele, i) => {
      if (item.id == ele.id) {
        index = i + 1
      }
    })
    let number = getFirstItemofRow(index, 6, items.length)
    console.log('Answer', number);
    items = insert(items, number - 1, movie)
    setMovies(items.map((item) => {
      if (item.flag) {
        return <MovieTrailer trailername={item?.name} description={item?.description} id={item?.id} handleClick={handleClick} key={'trailer' + item.id} />
      } else {
        return <Movie name={item?.name} description={item?.description} id={item?.id} handleClick={handleClick} key={item.id} />
      }
    }))


  }

  return (<>
    <div className={styles.main}>
      <div className={styles.items}>
        {movies}
      </div>
    </div>
  </>
  )
}

export default Home