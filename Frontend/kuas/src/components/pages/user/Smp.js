import React from 'react'
import { useEffect } from 'react'
import './materi.css'
import smpThumbnail from '../../img/smp.jpg';
import useApi from '../getapi'
import NavUser from '../../NavUser'
import BackButton from './ButtonBack';
import { Link } from 'react-router-dom'
import Whatsapp from '../../Whatsapp';

export default function Smp() {
    const {api, fetch} = useApi((state) => state)
    function loadData(){
        fetch('http://localhost:3008/smp/')
    }

    useEffect(() => {
       loadData();
      }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
  return (
    <>
    <NavUser/>
    <div className='background'>
    <div className="page">
        <BackButton/>
      <header>
        <img
          src={smpThumbnail}
          width={40}
          height={40}
          alt="smp Thumbnail"
        />
        <h1>SMP</h1>
      </header>
    <div className="grid">
          {api.length &&
            api.map((pel, index) => (
                <Link key={index} to={`/user/materi-belajar/smp/${pel.id}`}>
                <div className="card">
                  <p>{pel.nama}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
    </div>
    <Whatsapp/>
    </>
  )
}
