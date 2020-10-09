import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import '../App.css';

class Projects extends Component {
    render(){
        return(
        <div class="container" style={{boxSizing: "border-box"}}>
            <Card shadow={0} style={{width: '30%', height: '320px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#FFF', background: 'url(../assets/images/fietswiel-test.png) bottom right 15% no-repeat'}}>The bicycle wheel project();</CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    A project made by me and my teacher that uses spinning bicycle wheels to display animations.
                    The programming and setting up the mechanics was done by me.
                </CardText>
                <CardActions border>
                    <Button 
                        style={{color:"#47e551"}}
                        onClick={() => {}}>
                        View Project
                    </Button>
                </CardActions>
            </Card>
            <Card shadow={0} style={{width: '30%', height: '320px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#fff', background: 'url(../assets/images/logobrainfood-test.png) bottom right 10% no-repeat #46B6AC'}}>The brainfood project();</CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    This is an app I designed and constructed in invision. The app was focussed on the influences
                    on your brain by eating food. It would give users suggestions based on what mental activities
                    you would need to do.
                </CardText>
                <CardActions border>
                    <Button style={{color:"#47e551"}} href="https://projects.invisionapp.com/prototype/brainfood-cjpcjai0k0021tq0136ampq2l/play/6fc7a41b" target="_blank">View Project</Button>
                </CardActions>
            </Card>
            <Card shadow={0} style={{width: '30%', height: '320px', margin: '1%', float:"left", backgroundColor:"black"}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update();</CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button 
                        style={{color:"#47e551"}}
                        onClick={() => {}}>
                        View Project
                    </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
}

export default Projects;