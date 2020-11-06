import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import '../App.css';
import { Link } from 'react-router-dom'

class Projects extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       width:  800,
    //       height: 182,
    //       cardWidth,
    //       height
    //     }
    //   }
    
    //   /**
    //    * Calculate & Update state of new dimensions
    //    */
    //   updateDimensions() {
    //     if(window.innerWidth < 500) {
    //       this.setState({ width: 450, height: 102 });
    //     } else {
    //       let update_width  = window.innerWidth-100;
    //       let update_height = Math.round(update_width/4.4);
    //       this.setState({ width: update_width, height: update_height });
    //     }
    //   }
    
    //   /**
    //    * Add event listener
    //    */
    //   componentDidMount() {
    //     this.updateDimensions();
    //     window.addEventListener("resize", this.updateDimensions.bind(this));
    //   }
    
    //   /**
    //    * Remove event listener
    //    */
    //   componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions.bind(this));
    //   }

    //   cardScaling(){
    //       const updatedCardWidth = '30%'
    //       if (this.state.width === '450'){
    //         cardWidth = Math.min(this.state.width / 3)
    //         this.setState({cardWidth: updatedCardWidth});
            
    //       }
    //   }

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
                <CardTitle expand style={{color: '#fff', fontSize:'2em'}}>The cybersecurity. <span class="redText">project();</span></CardTitle>
                <CardText style={{color:"white", fontfamily: "courier new"}}>
                    I'm very interested in the cybersecurity side of the internet. It is important for developers to 
                    understand how to protect their apps. That's the reason why I started this project.
                </CardText>
                <CardActions border>
                    <Button 
                        style={{color:"#47e551"}}
                        component={Link} to="/cybersecurity-project">
                        View Project
                    </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
}

export default Projects;