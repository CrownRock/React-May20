import React, { Component } from 'react';
//import Main from './components/MainComponent';
//import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    }
}

export default App;