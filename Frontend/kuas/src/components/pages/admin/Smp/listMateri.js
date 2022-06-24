import React from "react";
import { Link } from "react-router-dom";
import NavAdmin from "../../../NavAdmin";
import MateriCard from "./MateriCard";

const ListMateri = (props) => {
  console.log(props);

  const deleteMateriHandler = (id) => {
    props.getMateriId(id);
  };

  const renderContactList = props.materi.map((materi) => {
    return (
      <MateriCard
        materi={materi}
        clickHander={deleteMateriHandler}
        key={materi.id}
      />
    );
  });
  return (
    <><NavAdmin/>
    <div className="main">
      <h2>
        Materi List
        <Link to="/admin/upload-materi/smp/add">
          <button className="ui button blue right">Tambah Materi</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div></>
    
  );
};

export default ListMateri;
