import moment from 'moment';
import React from "react";
import logo from "../../../assets/logo2.png";
const Header = () => {
  return (
    <div>
      <div className="div text-center">
        <img src={logo} alt="" />
        <h5 className="mt-2">Your Source for Today's News, Tomorrow's Insights.</h5>
        <h4>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</h4>

      </div>
    </div>
  );
};

export default Header;
