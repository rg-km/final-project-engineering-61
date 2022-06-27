import React from 'react'
import NavUser from '../../NavUser'
import './user.css'
import {Button} from '../../Button'
import { Link } from 'react-router-dom'
import Whatsapp from '../../Whatsapp'
// import useApi from '../api'

export default function User() {
  return (
    <>
    <NavUser/>
    <div className='user-container'>
      <h1>SELAMAT DATANG DI WEBSITE BEAS</h1>
   <div className='user-btns'>
      <Link to='/user/materi-belajar'>
        <Button  buttonSize='btn--large' buttonColor='white'>
                MULAI BELAJAR
        </Button>
    </Link>
      </div>
    </div>
    <Whatsapp/>
    </>
  )
}

