import React from "react";
import './TopContent.css'

export default function TopContent() {
  return (
    <div className="content">
      <div className="title titleLeft">
        <h1>Janeiro 2023</h1>
        <h2 className="subtitle">Período da conta:<p>&nbsp;30 dias</p></h2>
      </div>
      <div className="title titleRight">
        <h1>Pedro Henrique Ferreira Matos</h1>
        <h2 className="subtitle">Avenida Cipriano Del Fávero, 416</h2>
      </div>
    </div>
  );
}
