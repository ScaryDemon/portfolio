import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import '../App.css';
import { Link } from 'react-router-dom'

class Projects extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    render(){
        return(
        <div class="container" style={{boxSizing: "border-box"}}>
            <Card shadow={0} style={{width: '30%', height: '250px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#FFF', fontSize:'2em'}}>The bicycle wheel. <span class="redText">project();</span></CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    A project made by me and my teacher that uses spinning bicycle wheels to display animations.
                    The programming and setting up the mechanics was done by me.
                </CardText>
                <CardActions border>
                    <Button 
                        style={{color:"#47e551"}}
                        component={Link} to="/bycicle-wheel-project">
                        View Project
                    </Button>
                </CardActions>
            </Card>
            <Card shadow={0} style={{width: '30%', height: '250px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#fff', fontSize:'2em'}}>The brainfood. <span class="redText">project();</span></CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    This is an app I designed and constructed in invision. The app was focussed on the influences
                    on your brain by eating food. It would give users suggestions based on what mental activities
                    you would need to do.
                </CardText>
                <CardActions border>
                    <Button style={{color:"#47e551"}} href="https://projects.invisionapp.com/prototype/brainfood-cjpcjai0k0021tq0136ampq2l/play/6fc7a41b" target="_blank">View Project</Button>
                </CardActions>
            </Card>
            <Card shadow={0} style={{width: '30%', height: '250px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#fff', fontSize:'2em'}}>Update();</CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button 
                        style={{color:"#47e551"}}
                        component={Link} to="/github">
                        View Project
                    </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
}

export default Projects;