import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavAdmin from "../../../NavAdmin";

function MateriView() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3008/smp/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log();
  return (
    <>
    <NavAdmin/>
      <div className="backadmin">
        <Link
          to={`/admin/upload-materi/smp`}
        >
          Back To Home
        </Link>
        {data && (
          <div >
           <div >
              <h2>
                Nama mapel :
              </h2>
              <h3 >
                {data.nama}
              </h3>
              <h2 >
                Bab1 :
              </h2>
              <h3>
                {data.bab1}
              </h3>
              <h2 >
                Materi1 :
              </h2>
              <h3 >
                {data.materi1}
              </h3>
              <h2 >
                Bab2 :
              </h2>
              <h3>
                {data.bab2}
              </h3>
              <h2 >
                Materi2 :
              </h2>
              <h3 >
                {data.materi2}
              </h3>
              <h2 >
                Bab3 :
              </h2>
              <h3>
                {data.bab3}
              </h3>
              <h2 >
                Materi3 :
              </h2>
              <h3 >
                {data.materi3}
              </h3>
              <h2 >
                Bab4 :
              </h2>
              <h3>
                {data.bab4}
              </h3>
              <h2 >
                Materi4 :
              </h2>
              <h3 >
                {data.materi4}
              </h3>
              <h2 >
                Bab5 :
              </h2>
              <h3>
                {data.bab5}
              </h3>
              <h2 >
                Materi5 :
              </h2>
              <h3 >
                {data.materi5}
              </h3>
              <h2 >
                Bab6 :
              </h2>
              <h3>
                {data.bab6}
              </h3>
              <h2 >
                Materi6 :
              </h2>
              <h3 >
                {data.materi6}
              </h3>
              <h2 >
                Bab7 :
              </h2>
              <h3>
                {data.bab7}
              </h3>
              <h2 >
                Materi7 :
              </h2>
              <h3 >
                {data.materi7}
              </h3> <h2 >
                Bab8 :
              </h2>
              <h3>
                {data.bab8}
              </h3>
              <h2 >
                Materi8 :
              </h2>
              <h3 >
                {data.materi8}
              </h3> <h2 >
                Bab9 :
              </h2>
              <h3>
                {data.bab9}
              </h3>
              <h2 >
                Materi9 :
              </h2>
              <h3 >
                {data.materi9}
              </h3> <h2 >
                Bab10 :
              </h2>
              <h3>
                {data.bab10}
              </h3>
              <h2 >
                Materi10 :
              </h2>
              <h3 >
                {data.materi10}
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MateriView;
