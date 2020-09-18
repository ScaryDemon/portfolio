import React, { Component } from 'react';
import '../App.css';
import Particles from 'react-particles-js';
import Logo from '../assets/images/logo.png';
import Background from '../assets/images/background.jpg';


class Landing extends Component {
    render(){ 
        return(
        <div class="landingPage">
            <img src={Logo} alt="logo" class="logo-image"></img>
            <Particles 
            id="simple"
            width="100vw"
            height="100vh"
            style={{
                backgroundImage: "url(" + Background + ")",
            }}
            params={{
                particles: {
                    number: {
                        value: 120,
                    },
                    size: {
                        value: 5,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
            }}/>
        </div>
        )
    }
}

export default Landing;