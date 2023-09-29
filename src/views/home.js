import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Identity Analyst</title>
        <meta property="og:title" content="Dynamic Identity Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
