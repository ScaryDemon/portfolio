import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path ="/portfolio" component={LandingPage} />
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main