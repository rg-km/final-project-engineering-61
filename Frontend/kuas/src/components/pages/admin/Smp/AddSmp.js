import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../admin.css"
import { Button } from "../../../Button";
import NavAdmin from "../../../NavAdmin";
import BackButton from "../../user/ButtonBack";

function AddSmp() {
  const [nama, setNama] = useState(""); const [bab1, setBab1] = useState(""); 
  const [materi1, setMateri1] = useState(""); const [bab2, setBab2] = useState("");
  const [materi2, setMateri2] = useState(""); const [bab3, setBab3] = useState("");
  const [materi3, setMateri3] = useState(""); const [bab4, setBab4] = useState("");
  const [materi4, setMateri4] = useState(""); const [bab5, setBab5] = useState("");
  const [materi5, setMateri5] = useState(""); const [bab6, setBab6] = useState("");
  const [materi6, setMateri6] = useState(""); const [bab7, setBab7] = useState("");
  const [materi7, setMateri7] = useState(""); const [bab8, setBab8] = useState("");
  const [materi8, setMateri8] = useState(""); const [bab9, setBab9] = useState("");
  const [materi9, setMateri9] = useState(""); const [bab10, setBab10] = useState("");
  const [materi10, setMateri10] = useState("");

  const navigate = useNavigate();
  const data = {
    nama:nama, bab1:bab1, materi1:materi1, bab2:bab2, materi2: materi2,bab3:bab3, materi3: materi3,bab4:bab4, materi4: materi4,bab5:bab5, materi5:materi5,
    bab6: bab6, materi6:materi6,bab7:bab7, materi7: materi7,bab8: bab8, materi8:materi8,bab9:bab9, materi9:materi9,bab10: bab10, materi10:materi10
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3008/smp", data).then(navigate("/admin/upload-materi/smp"));
  }
  return (
    <>
    <NavAdmin/>
    <div className="backadmin">
      <BackButton/>
      <h2 className="title">ADD Materi</h2>
      <form className="flex">
       <b> Nama:</b>
        <textarea
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab1:</b>
        <textarea
          value={bab1}
          onChange={(e) => setBab1(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Materi1:</b>
        <textarea
          value={materi1}
          onChange={(e) => setMateri1(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab2:</b>
         <textarea
          value={bab2}
          onChange={(e) => setBab2(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi2:</b>
        <textarea
          value={materi2}
          onChange={(e) => setMateri2(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Bab3:</b>
        <textarea
          value={bab3}
          onChange={(e) => setBab3(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi3:</b>
         <textarea
          value={materi3}
          onChange={(e) => setMateri3(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab4:</b>
        <textarea
          value={bab4}
          onChange={(e) => setBab4(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Materi4:</b>
        <textarea
          value={materi4}
          onChange={(e) => setMateri4(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab5:</b>
         <textarea
          value={bab5}
          onChange={(e) => setBab5(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi5:</b>
        <textarea
          value={materi5}
          onChange={(e) => setMateri5(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Bab6:</b>
        <textarea
          value={bab6}
          onChange={(e) => setBab6(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi6:</b>
         <textarea
          value={materi6}
          onChange={(e) => setMateri6(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab7:</b>
        <textarea
          value={bab7}
          onChange={(e) => setBab7(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Materi7:</b>
        <textarea
          value={materi7}
          onChange={(e) => setMateri7(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab8:</b>
         <textarea
          value={bab8}
          onChange={(e) => setBab8(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi8:</b>
        <textarea
          value={materi8}
          onChange={(e) => setMateri8(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Bab9:</b>
        <textarea
          value={bab9}
          onChange={(e) => setBab9(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Materi9:</b>
         <textarea
          value={materi9}
          onChange={(e) => setMateri9(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <b> Bab10:</b>
        <textarea
          value={bab10}
          onChange={(e) => setBab10(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter "
        />
        <b> Materi10:</b>
        <textarea
          value={materi10}
          onChange={(e) => setMateri10(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter"
        />
        <Button
         buttonSize='btn--large' buttonColor='white'
          type="submit"
          onClick={submitForm}
        >
          ADD 
        </Button>
      </form>
    </div>
</>
  );
}

export default AddSmp;
