import React, { useState } from 'react'
import './Home.css'
import NavBar from '../../Components/Navbar/NavBar'
import Banner from '../../Components/Banner/Banner'
import TitleCard from '../../Components/TitleCard/TitleCard'
import Footer from '../../Components/Footer/Footer'
import Player from '../Player/Player'

function Home() {
  return (
    <div className='home'>
        <NavBar/>
        <Banner/>
        <TitleCard title={"Now_Playing"} category={"now_playing"} />
        <TitleCard title={"Top_Rated"} category={"top_rated"}/>
        <TitleCard title={"Popular"} category={"popular"}  />
        <TitleCard title={"Top Pics for You"} category={"upcoming"} />
        <Footer/>
    </div>
  )
}

export default Home