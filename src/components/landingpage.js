import React, { Component } from 'react';
import '../App.css';
import Particles from 'react-particles-js';
import Logo from '../assets/images/logo.png';


class Landing extends Component {
    render(){ 
        return(
        <div class="landingPage">
            <img src={Logo} class="logo-image"></img>
            <Particles 
            id="simple"
            width="100%"
            height="100vh"
            style={{
                backgroundColor: '#1a1c1b',
            }}
            params={{
                particles: {
                    number: {
                        value: 100,
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