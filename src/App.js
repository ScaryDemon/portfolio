import React from 'react';
import './App.css';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from  'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header class="header-color" title="Mel Raeven" scroll>
            <Navigation>
                <Link to="/" style={{color:'#f73838', fontWeight: 'bold'}}>Home</Link>
                <Link to="/projects" style={{color:'#47e551', fontWeight: 'bold'}}>Projects</Link>
                <Link to="/contact" style={{color:'#f7d138', fontWeight: 'bold'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Mel Raeven" style={{backgroundColor: "black", color:"white"}}>
            <Navigation>
                <Link to="/" style={{color:"white"}}>Home</Link>
                <Link to="/projects" style={{color:"white"}}>Projects</Link>
                <Link to="/contact" style={{color:"white"}}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
