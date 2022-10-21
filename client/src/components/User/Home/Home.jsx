import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
     <h1 className='text-3xl text-purple-600 font-bold m-5'>Hey Welcome !</h1> 
      <h3 className='text-xl m-10'>Share your Million dollar Ideas!</h3>
      <Link to='/app'>Click Here Buddy!</Link>
    </div>
  )
}

export default Home