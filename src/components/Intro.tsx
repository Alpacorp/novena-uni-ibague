import React from "react";
import BrandLogo from "./BrandLogo";
import { introFamily, uniIbagueLogo, novenaTexto } from "../assets";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <>
      <div className="introModal">
        <div className="introContent">
          <BrandLogo src={uniIbagueLogo} alt="Universidad de Ibagué" style={{height: "150px"}} />
          <div className="familyImage">
            <img
              src={introFamily}
              alt="Bienvenida del Buen Vecino"
              title="Bienvenida del Buen Vecino"
            />
          </div>
          <div className="novenaImage">
            <img
              src={novenaTexto}
              alt="Novena de Aguinaldos"
              title="Novena de Aguinaldos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
