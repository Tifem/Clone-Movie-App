import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Popular = () => {
  return (
    <>
    <Navbar/>
    <Card title={"Popular"} category={'popular'}/>
    </>
  )
}

export default Popular