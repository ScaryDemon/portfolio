import React, { Component } from 'react';
import { Textfield, Grid, Button } from 'react-mdl';
import '../App.css';

class Contact extends Component {
    render(){ 
        return(
        <div class="container">
            <div class="textfieldContainer">
                <h1 style={{margin: '10px'}}>Contact me!</h1>
                <Grid className="grid-1">
                    <Textfield
                        onChange={() => {}}
                        label="Name..."
                        style={{width: '200px'}}
                    />
                </Grid>
                <Grid className="grid-2">
                    <Textfield
                        onChange={() => {}}
                        label="Email adress..."
                        style={{width: '200px'}}
                    />
                </Grid>
                <Grid className="grid-3">
                    <Textfield
                    onChange={() => {}}
                    label="Text lines..."
                    rows={3}
                    style={{width: '200px'}}
                    />
                </Grid>
                <Grid className="grid-4">
                    <Button raised accent ripple onClick={() => {alert("message has been sent!")}}>Send!</Button>
                </Grid>
            </div>
        </div>
        )
    }
}

export default Contact;