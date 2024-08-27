import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const TopRated = () => {
  return (
    <>
      <Navbar />
      <Card title={"Top Rated"} category={"top_rated"} />
    </>
  );
}

export default TopRated