import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Home = () => {
  return (
    <>
      <Navbar />
      <Card title={"Now Playing"} category={"now_playing"} />
    </>
  );
}

export default Home