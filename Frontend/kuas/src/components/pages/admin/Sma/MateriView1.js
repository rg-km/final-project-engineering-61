import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavAdmin from "../../../NavAdmin";
import BackButton from "../../user/ButtonBack";

function MateriView1() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3008/sma/${id}`).then((res) => {
      setData(res.data);
    })// eslint-disable-next-line
  }, []);

  console.log();
  return (
    <>
    <NavAdmin/>
      <div className="backadmin">
      <BackButton/>
        {data && (
          <div className="flex" >
           <div  >
              <h2>
                Nama mapel :
              </h2>
              <p >
                {data.nama}
              </p>
              <h2 >
                Bab1 :
              </h2>
              <p>
                {data.bab1}
              </p>
              <h2 >
                Materi1 :
              </h2>
              <p >
                {data.materi1}
              </p>
              <h2 >
                Bab2 :
              </h2>
              <p>
                {data.bab2}
              </p>
              <h2 >
                Materi2 :
              </h2>
              <p >
                {data.materi2}
              </p>
              <h2 >
                Bab3 :
              </h2>
              <p>
                {data.bab3}
              </p>
              <h2 >
                Materi3 :
              </h2>
              <p >
                {data.materi3}
              </p>
              <h2 >
                Bab4 :
              </h2>
              <p>
                {data.bab4}
              </p>
              <h2 >
                Materi4 :
              </h2>
              <p >
                {data.materi4}
              </p>
              <h2 >
                Bab5 :
              </h2>
              <p>
                {data.bab5}
              </p>
              <h2 >
                Materi5 :
              </h2>
              <p >
                {data.materi5}
              </p>
              <h2 >
                Bab6 :
              </h2>
              <p>
                {data.bab6}
              </p>
              <h2 >
                Materi6 :
              </h2>
              <p >
                {data.materi6}
              </p>
              <h2 >
                Bab7 :
              </h2>
              <p>
                {data.bab7}
              </p>
              <h2 >
                Materi7 :
              </h2>
              <p >
                {data.materi7}
              </p> <h2 >
                Bab8 :
              </h2>
              <p>
                {data.bab8}
              </p>
              <h2 >
                Materi8 :
              </h2>
              <p >
                {data.materi8}
              </p> <h2 >
                Bab9 :
              </h2>
              <p>
                {data.bab9}
              </p>
              <h2 >
                Materi9 :
              </h2>
              <p >
                {data.materi9}
              </p> <h2 >
                Bab10 :
              </h2>
              <p>
                {data.bab10}
              </p>
              <h2 >
                Materi10 :
              </h2>
              <p >
                {data.materi10}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MateriView1;
