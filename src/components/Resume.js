import React from "react";
import saifullah from './saifullah.pdf';

const Resume = () => {

  return (
    <div >
    <iframe src={saifullah} style={{ position: "fixed", top: 0, left: 0, bottom:0, right:0, width:"100%", height:"100%", border: "none", margin:0, padding:0, overflow:"hidden", zIndex: 999999, }} frameborder="0" title="Saifullah's Resume"></iframe>
    </div>
  );
};

export default Resume;
