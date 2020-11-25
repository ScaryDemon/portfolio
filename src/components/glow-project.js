import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import GLOW_motor from '../assets/images/projects/GlowMotor.jpeg';
import UnmountedBagTest from '../assets/images/projects/UnmountedBagTest.mp4';
import MountedBagTest from '../assets/images/projects/MountedBagTest.mp4';
import CaseGlowTest from '../assets/images/projects/CaseGlowEffect.mp4';
import GlowFinal from '../assets/images/projects/GlowFinal.jpeg';
import FinalGlow from '../assets/images/projects/FinalVideoGlow.mp4';
import '../App.css';

class CybersecurityProject extends Component {
    render(){
        return(
        <div class="container" style={{boxSizing: "border-box"}}>
            <div class="projectContainer">
                <h1 style={{color: "white"}}>-- Cybersecurity Project --</h1>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">GLOW:</p>
                    <p>This years GLOW project is different from all of the previous years.</p>
                    <p>Due to the COVID-19 outbreak GLOW could not continue its usual program.</p>
                    <p>The organization behing GLOW solved this by placing showcases around Eindhoven in secret locations.</p>
                    <p>The Heuvelgallery asked us to design their showcase this year.</p>
                </div>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Idea:</p>
                    <p>Our idea was that we want to represent the beating heart of the gallery.</p>
                    <p>We want to acomplish this by making a bag that belongs to the gallery appear like it is breathing.</p>
                    <p>If the visitors dwindle the bag would breathe slower, but if the visitors rise then it would breathe faster.</p>
                    <p>With LED lights inside we want to simulate a beating heart that has the same concept as the lungs (beating slower or faster)</p>
                </div>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Tools:</p>
                    <p>The bag is placed on 2 acrylic plates that are attatched to a slide made of metal</p>
                    <p>The slide is made so that we can transfer the rotational force into push and pull movement.</p>
                    <p>There is a stepper motor at the base that turns a disk. The metal slide is attatched to this disk.</p>
                    <p>The stepper motor is driven by a driver and an Arduino.</p>
                </div>
                <img src={GLOW_motor} style={{padding: "5px", width: "50vw", height: "80%"}} alt="image" class="ProjectImage"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">This is my test setup for making the motor turn</p>
                </div>
                <video controls src={UnmountedBagTest} style={{padding: "5px", width: "50vw"}} type="video/mp4"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">The first mount:</p>
                    <p>We mounted the motor an a table and attatched a bag to it.</p>
                    <p>The breathing effect is fairly subtle, but still looked really cool.</p>
                </div>
                <video controls src={MountedBagTest} style={{padding: "5px", width: "50vw"}} type="video/mp4"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Pole mount:</p>
                    <p>We attatched the mechanism on an aluminium pipe.</p>
                    <p>We also strung LED's inside of the pipe for extra "breathing" effect.</p>
                </div>
                <video controls src={CaseGlowTest} style={{padding: "5px", width: "50vw"}} type="video/mp4"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Base:</p>
                    <p>The pole needed to be attatched to something. We found these boxes in the back of our junk pile.</p>
                    <p>I put two of then on top of eachother and put some LED's inside.</p>
                    <p>We thought it looked extremely cool and decided to use this as our base.</p>
                </div>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Huge setback:</p>
                    <p>The motor mechanism broke on the day of the deadline.</p>
                    <p>We did not have enough time to fix it, so we needed to divert.</p>
                    <p>The plan was to get rid of the mechanism and string the LED's further into the bag to make that glow to.</p>
                    <p>Once that was done we headed to the GLOW location and mountend everything.</p>
                </div>
                <img src={GlowFinal} style={{padding: "5px", width: "50vw", height: "80%"}} alt="image" class="ProjectImage"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Final:</p>
                </div>
                <video controls src={FinalGlow} style={{padding: "5px", width: "50vw"}} type="video/mp4"/>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Future improvements:</p>
                    <p>We are gonna do a software update to make the "breathing" linked to the colors of the LED's.</p>
                    <p>Also I would to make the mechanism work.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default CybersecurityProject;