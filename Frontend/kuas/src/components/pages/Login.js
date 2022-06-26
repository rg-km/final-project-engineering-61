import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import Navbar from '../Navbar'

export default function Login() {
  return (
    <>
    <Navbar/>
    <div  className='home-container'>
    <Link to='/user' >
        <Button buttonSize='btn--primary' buttonColor='white'>
            user</Button>
    </Link>
    <Link to='/admin'>
        <Button buttonSize='btn--primary' buttonColor='white'>
            admin</Button>
    </Link>
    </div>
    </>
  )
}
