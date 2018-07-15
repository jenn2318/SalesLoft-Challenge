import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
//import './Home.css';

export default class Home extends Component {

    render() {
        return (

            <Grid>
                <Jumbotron>
                    <h2>SalesLoft People Data Finder</h2>
                    <Link to="/search">
                        <Button bsStyle="primary">Enter</Button>
                    </Link>

                </Jumbotron>
            </Grid>

        )

    }

}