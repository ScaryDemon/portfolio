import React, { Component } from 'react';
import { Textfield, Grid, Button } from 'react-mdl';
import '../App.css';

class Contact extends Component {
    
    render(){ 
        return(
        <div class="container">
            <div class="textfieldContainer">
                <h1 style={{margin: '10px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '0px', color: 'white'}}>Contact</h1>
                <Grid className="grid-1">
                    <h8 style={{color:"white", paddingBottom:'30px'}}>You can contact me at the following places:</h8>
                </Grid>
                <Grid className="grid-2">
                   <Button raised accent href="http://linkedin.com/in/mel-raeven-2670ab1a4" target="_blank">LinkedIn</Button>
                </Grid>
                <Grid className="grid-3">
                <Button raised accent href="http://instagram.com/mel_raeven" target="_blank">Instagram</Button>
                </Grid>
                <div style={{margin: "50px"}}></div>
                <Grid className="grid-4">
                   <Button raised accent href="https://github.com/ScaryDemon" target="_blank">Github</Button>
                </Grid>
                <Grid className="grid-5">
                   <Button raised accent href="https://gitlab.com/ravendocx" target="_blank">Gitlab</Button>
                </Grid>
                <Grid className="grid-6">
                    <div style={{margin:"10px"}}>
                        <p>Email (private)</p>
                        <p>mel.raeven@gmail.com</p>
                    </div>
                    <div style={{margin:"10px"}}>
                        <p>Email (business)</p>
                        <p>ravendocx@protonmail.com</p>
                    </div>
                </Grid>
            </div>
        </div>
        )
    }
}

export default Contact;