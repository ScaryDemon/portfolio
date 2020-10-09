import React from 'react';
import './App.css';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from  'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header class="header-color" title="{[ Mel Raeven ]}" scroll>
            <Navigation>
                <Link to="/portfolio" style={{color:'#f73838', fontWeight: 'bolder'}}>Home</Link>
                <Link to="/projects" style={{color:'#47e551', fontWeight: 'bold'}}>Projects</Link>
                <Link to="/contact" style={{color:'#f7d138', fontWeight: 'bold'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Mel Raeven" style={{backgroundColor: "#373837", color:"white"}}>
            <Navigation>
                <Link to="/portfolio" style={{color:"#f73838", fontWeight:"bolder"}}>Home</Link>
                <Link to="/projects" style={{color:"#47e551", fontWeight:"bold"}}>Projects</Link>
                <Link to="/contact" style={{color:"#f7d138", fontWeight:"bold"}}>Contact</Link>
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
