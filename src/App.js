import React, { useState, useEffect } from "react";
import './App.css';
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";
//import FooterPage from "./FooterPage";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [id, setId] = useState("");


    useEffect(() => {//we are generating id of the video
      const id = videoURL.replace("https://www.youtube.com/watch?v=", "");
      console.log(id);
      setId(id);
    }, [videoURL]);
  
  

  return (
    <>
      <div className="app">
        <div className="heading">
        
        <h1>Youtube Downloader</h1>
        <p>The best Youtube Downloader - Video/MP3 Downloader. It’s fast, free, and fantastic!</p>
        </div>
         
      <div className="textField">
        <form onSubmit={(e) => e.preventDefault()/*to avoid page refresh when we enter enter buttom*/}>
          <input value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            placeholder="Paste Youtube URL here" />
          
        </form>
      </div>
     

      {videoURL === "" ? (
        <DownloadButtonDefault />
      ) : (
        <div>
          {videoURL.startsWith("https://www.youtube.com/watch?v=") ||
            videoURL.startsWith("https://youtube.com/watch?v=") ||
            videoURL.startsWith("www.youtube.com/watch?v=") ||
            videoURL.startsWith("youtube.com/watch?v=") ||
            videoURL.startsWith("v=")
             ? (
            <div>
              <DownloadButton id={id} type="mp3" /><br />
              <DownloadButton id={id} type="videos" />
            </div>):
            (<DownloadButtonInvalid/>
            )}
            </div>
      )}
       </div>
    
    </>
      );
}
      export default App;
