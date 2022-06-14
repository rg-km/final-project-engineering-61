import React from 'react'
// import '../../App.css'
import './home.css'
import {Button} from '../Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <div className='home-container'>
      <h1>SELAMAT DATANG DI WEBSITE KUAS</h1>
      <p>Kuas adalah website yang menyediakan materi pembelajaran yang dibutuhkan oleh siswa SMP dan SMA sebagai suplemen tambahan dalam belajar</p>
      <div className='home-btns'>
      <Link to='/materi belajar'>
        <Button  buttonSize='btn--large' buttonColor='white'>
                YUK BELAJAR
        </Button>
    </Link>
      </div>
    </div>
  )
}

export default Home