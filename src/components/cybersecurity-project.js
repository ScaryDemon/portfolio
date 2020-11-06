import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import BycicleWheelImage from '../assets/images/projects/fietswiel.jpg';
import BycicleWheelVideo from '../assets/images/projects/fietswiel video.mp4';
import '../App.css';

class CybersecurityProject extends Component {
    render(){
        return(
        <div class="container" style={{boxSizing: "border-box"}}>
            <div class="projectContainer">
                <h1 style={{color: "white"}}>-- Cybersecurity Project --</h1>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Idea:</p>
                    <p>My goals is to write a piece of software that allows small companies to run a automated security check on web apps.</p>
                    <p>Why small comapnies? Cybersecurity tools are extremely expensive. Not allot of small companies have experts that can do these tests for them.</p>
                    <p>With this tool anyone in the companie could easily test web apps and get a detailed report afterwards.</p>
                </div>
                <div style={{color: "white", backgroundColor: "black", width: "50vw"}}>
                    <p class="redText">Tools:</p>
                    <p>The front-end is going to be made with <a href="https://vuejs.org/" target="_blank">VUE</a>. The reason for this is so that it can be easily scaled with components.</p>
                    <p>The back-end is going to be made in Python using <a href="https://flask.palletsprojects.com" target="_blank">Flask</a>. The back-end will also use cybersecurity tools like <a href="https://nmap.org/" target="_blank">Nmap</a>.</p>
                    <p>All of the results from the back-end will be pushed back to the front-end and it will also be exported to a document that will be saved locally.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default CybersecurityProject;