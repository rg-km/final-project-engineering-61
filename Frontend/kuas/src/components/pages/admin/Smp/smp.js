import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Button";
import NavAdmin from "../../../NavAdmin";
import BackButton from "../../user/ButtonBack";
import '../admin.css'

function Upsmp() {
  const [materi, setMateri] = useState([]);

  function loadMateri() {
    axios.get("http://localhost:3008/smp").then((res) => {
      setMateri(res.data);
    });
  }

  useEffect(() => {
    loadMateri();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3008/smp/${id}`).then(loadMateri());
  }

  return (
    <>
    <NavAdmin/>
      <div className="backadmin">
      <BackButton/>
      <div>
        <div className="title" >
        <h1 >Daftar Materi</h1>
          <Button  buttonStyle={'btn--outline'} buttonSize={'btn--mobile'}  >
          <Link  to="/admin/upload-materi/smp/add" >
            Add Materi
            </Link>
            </Button>
        </div>
        <div >
          <div>
            <div >
            <div className="grid">
          {materi.length &&
            materi.map((pel, index) => (
                <Link key={index} to={`/admin/upload-materi/smp/${pel.id}`} >
                <div className="cardadmin">
                  <p>{pel.nama}</p>
                  <h4>
                   <Link
                      to={`/admin/upload-materi/smp/edit/${pel.id}`}>
                      Edit
                    </Link>
                  </h4>
                  <h4>
                  <Link
                      onClick={()=>deleteUser(pel.id)}
                      to={"/admin/upload-materi/smp"}>
                      Delete
                  </Link>
                  </h4>
                 
                </div>
                </Link>
            ))}
        </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Upsmp;
