import React, {useEffect}from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import NavAdmin from '../../NavAdmin'
import useApi from '../getapi'
import './admin.css'

export default function Admin() {
  const {api, fetch} = useApi((state) => state)
  function loadData(){
      fetch('http://localhost:3008/admin/1')
  }
  useEffect(() => {
     loadData();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <NavAdmin/>
    <div className='backadmin'>
      <div className='pageadmin'>
       <h1>INI HALAMAN UNTUK ADMIN</h1>
    <Link to='/admin/upload-materi/'>
      <Button buttonSize='btn--large' buttonColor='white' >
        MANAGE MATERI
        </Button> 
    </Link>
      </div>
    </div>
    </>
  )
}
