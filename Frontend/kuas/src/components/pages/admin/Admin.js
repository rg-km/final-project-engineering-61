import React, {useEffect}from 'react'
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
    }, []);
  return (
    <>
    <NavAdmin/>
    <div className='backadmin'>
    <div className="flex-col-adm">
      <h1> Biodata Admin</h1>
          <div>
            <h2>Nama :</h2>
            <h3>{api?.nama}</h3>
          </div>
          <div>
            <h2>Email :</h2>
            <h3>{api?.email}</h3>
          </div>
          <div>
            <h2>Nomor handphone :</h2>
            <h3>{api?.nohp}</h3>
          </div>
          
        </div>
      </div>
    </>
  )
}
