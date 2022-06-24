import React from 'react'
import Navbar from '../../Navbar'
// import Features from './Features/Features'
import {homeObjOne, homeObjTwo,} from './Features/Data.js';
import Section from './section'
// import Footer from '../../Footer'
import './home.css'
import {Button} from '../../Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <>
  <Navbar/>
   <div className='home-container'>
      <h1>SELAMAT DATANG DI WEBSITE KUAS</h1>
      <p>Kuas adalah website yang menyediakan materi pembelajaran yang dibutuhkan untuk siswa SMP dan SMA sebagai suplemen tambahan dalam belajar</p>
      <div className='home-btns'>
      <Link to='/register'>
        <Button  buttonSize='btn--large' buttonColor='white'>
                COBA BELAJAR
        </Button>
    </Link>
      </div>
    </div>
    <Section {...homeObjOne}/>
    <Section {...homeObjTwo}/>
  </>
  )
}

export default Home