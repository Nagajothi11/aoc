import React, { useState } from "react";


export default function Navbar({ logo }) {

  return (
    <header>
      <div className="header-info">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center px-md-5">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
    </header>
  );
}
