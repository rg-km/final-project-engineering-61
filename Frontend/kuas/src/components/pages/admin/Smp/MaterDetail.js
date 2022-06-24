import React from "react";
import { Link } from "react-router-dom";

const MateriDetail = (props) => {
  const { nama, bab1, materi1, bab2, materi2,bab3, materi3,bab4, materi4,bab5, materi5,bab6, materi6,bab7, materi7,bab8, materi8,bab9, materi9,bab10, materi10 } = props.location.state.materi;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{nama}</div>
          <div className="description"><b>Bab : </b><p>{bab1}</p></div>
          <div className="description">isi : <p>{materi1}</p></div>
          <div className="description"><b>Bab : </b><p>{bab2}</p></div>
          <div className="description">isi : <p>{materi2}</p></div>
          <div className="description"><b>Bab : </b><p>{bab3}</p></div>
          <div className="description">isi : <p>{materi3}</p></div>
          <div className="description"><b>Bab : </b><p>{bab4}</p></div>
          <div className="description">isi : <p>{materi4}</p></div>
          <div className="description"><b>Bab : </b><p>{bab5}</p></div>
          <div className="description">isi : <p>{materi5}</p></div>
          <div className="description"><b>Bab : </b><p>{bab6}</p></div>
          <div className="description">isi : <p>{materi6}</p></div>
          <div className="description"><b>Bab : </b><p>{bab7}</p></div>
          <div className="description">isi : <p>{materi7}</p></div>
          <div className="description"><b>Bab : </b><p>{bab8}</p></div>
          <div className="description">isi : <p>{materi8}</p></div>
          <div className="description"><b>Bab : </b><p>{bab9}</p></div>
          <div className="description">isi : <p>{materi9}</p></div>
          <div className="description"><b>Bab : </b><p>{bab10}</p></div>
          <div className="description">isi : <p>{materi10}</p></div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/admin/upload-materi/smp">
          <button className="ui button blue center">
            kembali ke list Materi
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MateriDetail;
