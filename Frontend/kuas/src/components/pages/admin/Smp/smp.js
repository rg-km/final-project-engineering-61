import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <h1>Daftar Materi</h1>
        <div className="flex flex-col">
          <div >
            <div >
              <div >
                <Link to="/admin/upload-materi/smp/add" >
                     Add Materi
                </Link>
                <table >
                  <thead >
                    <tr>
                      <th>
                        #
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        Bab
                      </th>
                      <th>
                       Materi
                      </th>
                      <th>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {materi.map((data, index) => (
                      <tr
                        key={index}>
                        <td >
                          {index + 1}
                        </td>
                        <td >
                          {data.nama}
                        </td>
                        <td >
                          {data.bab1}
                        </td>
                        <td >
                          {data.materi1}
                        </td>
                        <td >
                          <Link
                            to={`/admin/upload-materi/smp/${data.id}`}>
                            VIew
                          </Link>
                          <Link
                            to={`/admin/upload-materi/smp/edit/${data.id}`}>
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteUser(data.id)}
                            to={"#"}>
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upsmp;
