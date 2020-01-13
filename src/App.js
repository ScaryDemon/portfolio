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
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
