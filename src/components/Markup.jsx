import React from 'react';
import "./Markup.css";
import Artist from "./MarkupSources/paul.png"
import Title from"./MarkupSources/Redeemer.mp3"
import ReactAudioPlayer from 'react-audio-player';


const Markup = () => {


    return ( 
        <div className="music-badge">

<ReactAudioPlayer
  src={Title}
  autoPlay={true}
  
/>




            <div className="art" >
                <img className="image" src={Artist}/>
                
                <div className="overlay" >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="text">
                <div className="title">Reedemer</div>
                <div className="artist">Paul Cardall</div>
            </div>

        </div>
     );
}
 
export default Markup;