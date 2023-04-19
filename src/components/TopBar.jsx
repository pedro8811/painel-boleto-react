import React from "react";
import './TopBar.css';
import { ImExit} from 'react-icons/im'

export default function TopBar(){
  return (
    <div className="topBar">
      <h1>Detalhes da conta</h1>
      <div className="quitButton" tabIndex={1}>
        <ImExit/>
        <p>Sair</p>
      </div>
    </div>
  )
}