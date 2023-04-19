import React from "react";
import './Container.css'
import TopContent from "./TopContent";
import GreenContainer from "./GreenContainer";
import ButtonSection from "./ButtonSection";

export default function Container(){
  return(
    <div className="mainContent">
      <TopContent/>
      <GreenContainer/>
      <ButtonSection/>
    </div>
  )
}