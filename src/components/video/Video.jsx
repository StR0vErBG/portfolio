import React, { useState, useRef, useEffect } from 'react';
import "./video.scss"
const Video = ({source}) => {
    const [isStarted, setStart]= useState(false)
    const videoRef = useRef(null)

    useEffect(() => {           
        if(isStarted){
            videoRef.current.muted = true
            videoRef.current.play()

        }
        if(!isStarted){
            videoRef.current.currentTime = 0
            videoRef.current.pause()
        }
    }, [videoRef, isStarted]);
 
    return (
        <div className="video-box" >
            <video src={source} type="video/mp4" loop ref={videoRef} onMouseEnter={()=> setStart(true)} onMouseLeave={()=> setStart(false)}>
            </video>
        </div>
       
    );

}

export default Video;
