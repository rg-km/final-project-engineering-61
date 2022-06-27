import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './rate.css'
import axios from 'axios'
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Rate() {
  const [rating, setRating] = useState("");  
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const data = {
    rating:rating
  }
  const navigate = useNavigate();
  function submitForm(e){
    e.preventDefault();
    axios.post("http://localhost:3008/rate", data.then(navigate("/")))
  }

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <>
    <Navbar/>
    <div className="bg">
    <div className="rate" style={styles.container}>
      <h2> Ratings </h2>
      <div cla style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="What's your experience?"
        type="text"
        style={styles.textarea}

      />
      <button
        style={styles.button}
        onClick={submitForm}
      >
        Submit
      </button>
    </div>
    </div>
    </>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 300,
    width: 500
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 500,
    padding: 10,
  }

};




export default Rate;
 