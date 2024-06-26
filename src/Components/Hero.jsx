import React, { useEffect, useState } from "react";
import Pause from "../assets/pattern-divider-desktop.svg";
import Greenbox from "../assets/icon-dice.svg";
import "../Styles/Hero.css";

const Hero = () => {
  const [advice, setAdvice] = useState("");
  const [slipId, setSlipId] = useState(null);

  const getSlip = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setSlipId(data.slip.id);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getSlip();
  }, []);

  return (
    <div className="first-box">
      <div className="quote-container">
        <h2 className="advise">ADVICE #{slipId}</h2>
        <p>{advice}</p>
        <img src={Pause} className="text-container" alt="" />
        <button className="button-container" onClick={getSlip}>
          <img src={Greenbox} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;