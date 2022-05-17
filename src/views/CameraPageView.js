import React from 'react'
import './css/CameraPage.css'
import { FaHome } from "react-icons/fa";

function CameraPageView( {images, home} ) {
    return (
        <div className="cameraPageView">
            <div className='cameraPictureContainer'>
                <img className="cameraPicture" src={images['testKameraBild.jpg']} alt="" />
            </div>
            <div className="cameraPageData">
                <div>Camera Name: 
                    <div className="cameraData">ESP32-CAM</div>
                </div>
                <div>Camera Manufacturer: 
                    <div className="cameraData">AI-Thinker</div>
                </div>
                <div>Processor Architecture: 
                    <div className="cameraData">DUAL CORE 32bit CPU</div>
                </div>
                <div>Processor Design: 
                    <div className="cameraData">frequency up to 240MHz</div>
                </div>
                <div>Total Memory: 
                    <div className="cameraData">520 kb sRAM</div>
                </div>
            </div>
            <div className='cameraPictureContainer'>
                <img className="cameraPicture" src={images['PIRsensor.jpg']} alt="" />
            </div>
            <div className="cameraPageData">
                <div>PIR sensor: 
                    <div className="cameraData">HC--SR501 Body Sensor Module</div>
                </div>
                <div>Type: 
                    <div className="cameraData">Based on Infrared technology</div>
                </div>
                <div>Sensing Range: 
                    <div className="cameraData">less than 120 degree, within 7 meters</div>
                </div>
                <div>Voltage: 
                    <div className="cameraData">5V -20V</div>
                </div>
            </div>
            <div className="goBackButtonContainer">
                <button className="goBackButton" title="go back to home" onClick={home}><FaHome/></button>
            </div>
        </div>
    )
}

export default CameraPageView