import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Aromatic Rusty Jackal</title>
        <meta property="og:title" content="Aromatic Rusty Jackal" />
      </Helmet>
    </div>
  )
}

export default Home
