import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import axios from "axios/index";
//import './Home.css';

const config = {
    headers : {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
};

//Set the state of the people array here
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //Check the click event for the api call from axios
    handleClick() {
        axios.get('https://vibrant-noyce-249d90.netlify.com/api/v2/users.json', config)
            .then(res => {
                this.setState({
                    people: res.data.data,
                })

            }).catch(err => {
            console.log(err);
        });
    }

    //Render the state of the people data on the home page
    render() {
        console.log(this.state.people);
        return (
            <Grid>
                <Jumbotron>
                    <h2>SalesLoft People Data Finder</h2>
                    {/*<Link to="/search">*/}
                        {/*<Button bsStyle="primary">Enter</Button>*/}
                    {/*</Link>*/}
                </Jumbotron>
                <div>
                <Button className="button-move" onClick ={this.handleClick}> Get People </Button>
                </div>
                <div>
                    {this.state.people.map((person, index) => (
                        <div>
                            <p> Name: {`${person.first_name} ${person.last_name}`} </p>
                            <p>Job Title: Software Engineer</p>
                            <p>Email: {person.email}</p>
                        </div>
                    ))}
                </div>
            </Grid>

        )

    }

}