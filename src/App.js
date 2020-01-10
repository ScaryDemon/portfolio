import React from 'react';
import './App.css';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from  'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
  </div>
  );
}

export default App;
