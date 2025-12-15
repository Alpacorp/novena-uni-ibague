import React, {FC} from "react";
import Back from "./Back";
import "./Components.css";
import backButton from "../assets/components/volver.svg";

interface HeaderProps {
  show?: boolean;
}

const Header: FC<HeaderProps> = ({ show }) => {
  return (
    <div className="header">
      {show ? <Back url="/novena" src={backButton} /> : ""}
    </div>
  );
};

export default Header;
