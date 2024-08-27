import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Upcoming = () => {
  return (
    <>
      <Navbar />
      <Card title={"Upcoming"} category={"upcoming"} />
    </>
  );
}

export default Upcoming