import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import BycicleWheelImage from '../assets/images/projects/fietswiel.jpg';
import BycicleWheelVideo from '../assets/images/projects/fietswiel video.mp4';
import '../App.css';

class BycicleWheelProject extends Component {
    render(){
        return(
        <div class="container" style={{boxSizing: "border-box"}}>
            <div class="projectContainer">
                <h1 style={{color: "white"}}>-- Bycicle wheel project --</h1>
                <video controls src={BycicleWheelVideo} style={{padding: "5px", width: "50vw"}} type="video/mp4"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Assignment:</p>
                    <p>The installation was originaly designed to participate in <a href="https://www.gloweindhoven.nl" target="_blank">GLOW</a>.</p>
                    <p>Due to technical difficulties we had where unable to use it.</p>
                    <p>We instead used it as the christmas tree for our school entrance</p>
                </div>
                <img src={BycicleWheelImage} style={{padding: "5px", width: "50vw", height: "80%"}} alt="image" class="ProjectImage"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Specs:</p>
                    <p>The wood was custom cut and designed by us</p>
                    <p>We used generic bycicle wheels. They are mounted on their original axles.</p>
                    <p>All of the wheels are connected by a single rope thats looped on the wheels.</p>
                    <p>The rope itself is turned by a washingmachine motor. The speed of the motor is controlled by a dim switch</p>
                    <p>We used random lights that we found at home, like christmas lights, etc..</p>
                </div>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Future changes:</p>
                    <p>I would really like to change the light construction to LED light strips.</p>
                    <p>The LED strips would me connected to Raspberry Pi's.</p>
                    <p>This would allow me to pulse the LED's to music or other things.</p>
                    <p>Another thing is that i want to have individual motors for each wheel.</p>
                    <p>This would make each box modular. It also would allow me to vary the spead of each box seperately.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default BycicleWheelProject;