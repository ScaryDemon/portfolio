import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import GLOW_motor from '../assets/images/projects/GlowMotor.jpeg';
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
            </div>
        </div>
        )
    }
}

export default CybersecurityProject;