import React from 'react'
import { Link } from "react-router-dom";
import NavUser from '../../NavUser'
import Whatsapp from '../../Whatsapp';
import './materi.css'
import smp from '../../img/smp.jpg';
import sma from '../../img/sma.jpg';

export default function MateriUser() {
  return (
    <>
    <NavUser/>
    <main className="main-menu">
      <Link to="/user/materi-belajar/smp">
        <div>
          <h1>SMP</h1>
          <img src={smp} width={350} alt="Smp Thumbnail" />
        </div>
      </Link>
      <Link to="/user/materi-belajar/sma">
        <div>
          <h1>SMA</h1>
          <img src={sma} width={350} alt="Sma Thumbnail" />
        </div>
      </Link>
    </main>
    <Whatsapp/>
    </>
  )
}
