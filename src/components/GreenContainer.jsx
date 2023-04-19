import React from "react";
import './GreenContainer.css'

export default function GreenContainer(){
  return(
    <div className="subContainer">
      <div className="topSub">
        <div className="leftSubTitle">
          <h1>Valor</h1>
          <h2>R$ 1000,00</h2>
        </div>
        <div className="rightSubTitle">
          <p>Em Aberto</p>
        </div>
      </div>

      <div className="bottomSub">
        <div className="doubleInfo">
          <h1>Vencimento</h1>
          <h2>28/01/2023</h2>
        </div>
        <div className="doubleInfo">
          <h1>Código do Inquilino</h1>
          <h2>1234</h2>
        </div>
        <div className="doubleInfo">
          <h1>Código do Imóvel</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  )
}