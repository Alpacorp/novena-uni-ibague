import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  novenaTextoSecond,
  uniIbagueLogo,
  web,
  facebook,
  linkedin,
  instagram
} from "../assets";
import BrandLogo from "../components/BrandLogo";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header show={false} />
      <BrandLogo src={uniIbagueLogo} alt="Universidad de Ibagué" style={{height: "80px"}} />
      <div style={{textAlign: "center", margin: "0.5rem auto"}}>
        <a href="https://www.unibague.edu.co/" target="blank">
          <img src={web} alt="www.unibague.edu.co" style={{maxWidth: "300px", width: "100%", margin: "0 auto"}} />
        </a>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0.5rem auto", gap: "1rem" }}>
        <a href="" target="blank">
          <img src={facebook} alt="" style={{maxWidth: "40px", width: "100%", margin: "0 auto"}} />
        </a>
        <a href="" target="blank">
          <img src={instagram} alt="" style={{maxWidth: "40px", width: "100%", margin: "0 auto"}} />
        </a>
        <a href="" target="blank">
          <img src={linkedin} alt="" style={{maxWidth: "40px", width: "100%", margin: "0 auto"}} />
        </a>
      </div>
      <div style={{textAlign: "center", margin: "0.5rem auto"}}>
          <img src={novenaTextoSecond} alt="Novena de aguinaldos" style={{maxWidth: "350px", width: "100%", margin: "0 auto"}} />
      </div>
      <p className="instructive">Sigue cada paso y reza en familia</p>
      <div className="mainMenu">
        <Link to="/novena/oracion-para-todos-los-dias" className="menuOption">
          <img
            src={one}
            alt="paso uno"
            title="Paso 1, oración para todos los días"
          />
        </Link>
        <Link to="/novena/lectura-para-hoy" className="menuOption">
          <img src={two} alt="paso dos" title="Paso 2, lectura para hoy" />
        </Link>
        <Link to="/novena/oracion-a-la-santisima-virgen" className="menuOption">
          <img
            src={three}
            alt="paso tres"
            title="Paso 3, oración a la santísima virgen"
          />
        </Link>
        <Link to="/novena/oracion-a-san-jose" className="menuOption">
          <img
            src={four}
            alt="paso cuatro"
            title="Paso 4, oración a San José"
          />
        </Link>
        <Link to="/novena/los-gozos" className="menuOption">
          <img src={five} alt="paso cinco" title="Paso 5, los gozos" />
        </Link>
        <Link to="/novena/oracion-al-nino-jesus" className="menuOption">
          <img
            src={six}
            alt="paso seis"
            title="Paso 6, oración al niño Jesús"
          />
        </Link>
        <Link to="/novena/villancicos" className="menuOption">
          <img src={seven} alt="villancicos" title="Paso 7, villancicos" />
        </Link>
      </div>
    </>
  );
};

export default Home;
