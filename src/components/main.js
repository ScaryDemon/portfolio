import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import BycicleWheelProject from './bycicle-wheel-project';
import cybersecurityProject from './cybersecurity-project';
import glowProject from './glow-project'
import Github from "./github";

const Main = () => (
    <Switch>
        <Route exact path ="/portfolio" component={LandingPage} />
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/bycicle-wheel-project" component={BycicleWheelProject}/>
        <Route path="/cybersecurity-project" component={cybersecurityProject}/>
        <Route path="/Github" component={Github}/>
        <Route path="/glow-project" component={glowProject}/>
    </Switch>
)

export default Main