import React, { Component}  from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import Home from './components/Home';
import DataSearch from './components/DataSearch';
import './App.css';
import Navbar from './components/CustomNavbar';
//import './Home.css';




class App extends Component {
    render() {
          return (
              <Router>
                  <div>
                      <Navbar />
                      {/*<Button onClick ={this.handleClick} />*/}
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Search" component={DataSearch} />
                  </div>
              </Router>
          );
      }
  }



    export default App;
