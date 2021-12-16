import React from "react";
import "./DownloadButtonDefault.css";
import gif from "./gif.gif";

const DownloadButtonDefault=()=>{
    return(
        <>
        <div className="default">
            <h1>Paste The Video URL Here...</h1>
            <br/>
            <p>Tutorial to Copy the Url from Youtube👇</p>
            <img src={gif} alt="tutorial"/>
        </div>
        </>
    );
}
export default DownloadButtonDefault;