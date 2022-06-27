import React from 'react'
import NavAdmin from '../../NavAdmin'
import { Link } from "react-router-dom";
import smp from '../../img/smp.jpg';
import sma from '../../img/sma.jpg';

export default function UploadMateri() {
  return (
    <>
    <NavAdmin/>
    <main className="menu-admin">
      <Link to="/admin/upload-materi/smp">
        <div>
          <h1>SMP</h1>
          <img src={smp} width={350} alt="Smp Thumbnail" />
        </div>
      </Link>
      <Link to="/admin/upload-materi/sma">
        <div>
          <h1>SMA</h1>
          <img src={sma} width={350} alt="Sma Thumbnail" />
        </div>
      </Link>
    </main>
    </>
  )
}
