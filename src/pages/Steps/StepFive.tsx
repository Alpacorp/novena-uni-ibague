import React from "react";
import { useState } from "react";
import DayImgDate from "../../components/DayImgDate";
import Slide from "../../components/Slide";
import { data } from "../../data/data.json";
import { beforeIcon, afterIcon, fivePage } from "../../assets";
import Header from "../../components/Header";

const StepFive = () => {
  const [counter, setCounter] = useState(0);

  const dataInfo = data.filter((item) => item.id === counter);

  const next = () => {
    setCounter(counter + 1);
  };

  const before = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate src={fivePage} alt="Paso 5" />
        <h2>Los Gozos</h2>
        <Slide />
        {counter === 0 ? "" : `${counter} de 12`}
        <br />
        <div className="stepText gz">
          <p className="gozos">
            {!dataInfo || dataInfo.length === 0 ? "" : dataInfo[0].message}
          </p>
          <small>Coro </small>
          <small>!Ven a nuestras almas,</small>
          <small>ven no tardes tanto!</small>
          <div className="buttons">
            {counter <= 0 ? (
              ""
            ) : (
              <button
                type="button"
                onClick={before}
                className="buttonBefore"
                title="Anterior"
              >
                <img src={beforeIcon} alt="Anterior" />
              </button>
            )}
            {counter < 12 ? (
              <button
                type="button"
                onClick={next}
                className="buttonAfter"
                title="Siguiente"
              >
                <img src={afterIcon} alt="Siguiente" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
