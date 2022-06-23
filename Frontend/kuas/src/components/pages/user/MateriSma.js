import React, { useEffect, useState } from "react";
import useApi from "../getapi";
import { useParams } from "react-router-dom";
import BackButton from "./ButtonBack";
import NavUser from "../../NavUser";
import "./materi.css"
import Whatsapp from "../../Whatsapp";


export default function MateriSma() {
    // const [materi, setMateri] = useState([]);
    const {api, fetch} = useApi((state) => state)
    
    const {id} = useParams();
    const controller = new AbortController();
    function loadMateri(){
        fetch('http://localhost:3008/sma/' + id)
    }
      useEffect(() => {
        // TODO: answer here
        loadMateri();
        return () => {
          controller.abort();
        };
      }, []);
    
  return (
    <>
    <NavUser/>
    <div className='background'>
    <div className="page">
        <BackButton/>
      <header>
        <h1>{api?.nama}</h1>
      </header>
      <div className="flex-col">
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab1}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi1}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab2}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi2}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab3}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi3}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab4}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi4}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab5}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi5}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab6}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi6}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab7}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi7}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab8}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi8}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab9}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi9}</p>
          </div>
          <div>
            <h2>Bab</h2>
            <h3>{api?.bab10}</h3>
          </div>
          <div>
            <h2>Materi</h2>
            <p>{api?.materi10}</p>
          </div>
          
        </div>
    </div>
    </div>
    <Whatsapp/>
    </>
  )
}
