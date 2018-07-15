import React, { Component}  from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import DataSearch from './components/DataSearch';
import './App.css';
import Navbar from './components/CustomNavbar';
import './components/CustomNavbar.css';


class App extends Component {
  render() {
      fetch('https://vibrant-noyce-249d90.netlify.com/api/v2/users.json').then(function(response) {
          console.log('resposne', response)
          return response.blob();
      }).catch(function(err) {
          console.log('err', err)
      });

          return (

              <Router>
                  <div>
                      <Navbar />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Search" component={DataSearch} />
                  </div>
              </Router>
          );
      }
  }



    export default App;
