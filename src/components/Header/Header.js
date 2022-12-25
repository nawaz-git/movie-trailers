import { React, useState } from 'react'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [comingsoon, setcomingsoon] = useState(true)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span>Movie Trailers</span>
            </div>
            <div className={styles.types}>
              <div className={comingsoon ? styles.active : undefined}>
                <button onClick={() => { setcomingsoon(!comingsoon) }}>COMING SOON</button>
              </div>
              <div className={!comingsoon ? styles.active : undefined}>
                <button onClick={() => { setcomingsoon(!comingsoon) }}>NOW SHOWING</button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.filters}>
              <select>
                <option>Popular</option>
                <option>Fresh</option>
              </select>
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <select>
                <option>All Genres</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Applied Filters: &nbsp;</span>
          <div className={styles.filter}>English
            <CloseIcon fontSize='small' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header