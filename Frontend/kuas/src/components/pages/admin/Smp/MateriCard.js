import React from "react";
import { Link } from "react-router-dom";

const MateriCard = (props) => {
  const { id, nama, bab1, materi1, bab2, materi2,bab3, materi3,bab4, materi4,bab5, materi5,bab6, materi6,bab7, materi7,bab8, materi8,bab9, materi9,bab10, materi10 } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/admin/upload-materi/smp${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{nama}</div>
          <div><b>Bab</b> {bab1}</div>
          <div>isi : {materi1}</div>
          <div><b>Bab</b> {bab2}</div>
          <div>isi : {materi2}</div>
          <div><b>Bab</b> {bab3}</div>
          <div>isi : {materi3}</div>
          <div><b>Bab</b> {bab4}</div>
          <div>isi : {materi4}</div>
          <div><b>Bab</b> {bab5}</div>
          <div>isi : {materi5}</div>
          <div><b>Bab</b> {bab6}</div>
          <div>isi : {materi6}</div>
          <div><b>Bab</b> {bab7}</div>
          <div>isi : {materi7}</div>
          <div><b>Bab</b> {bab8}</div>
          <div>isi : {materi8}</div>
          <div><b>Bab</b> {bab9}</div>
          <div>isi : {materi9}</div>
          <div><b>Bab</b> {bab10}</div>
          <div>isi : {materi10}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/admin/upload-materi/smp/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default MateriCard;
