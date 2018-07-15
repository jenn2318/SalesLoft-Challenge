import React, { Component } from 'react'
import { Grid, Col, Button} from 'react-bootstrap';
import './DataSearch.css';
import axios from "axios/index";
import stringSimilarity from 'string-similarity'

//Set the config to access token
const config = {
    headers : {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
};


//Set state for the frequency count
export default class About extends Component {
    constructor(){
        super();
        this.state = {
            frequency : [],
            similarEmails: []
        };
        this.handleFrequency = this.handleFrequency.bind(this);
        this.handleDuplicate = this.handleDuplicate.bind(this);
    }

    //function to handle counting the unique characters
handleFrequency() {
    axios.get('https://vibrant-noyce-249d90.netlify.com/api/v2/users.json', config)
        .then(res => {
            const emails = [];
            const people = res.data.data;
            people.map((person) => {
               if (person.email) {
                   emails.push(person.email);
               }
           });
            let output =[];
             emails.map((email) => {
                 const counter = {};
                 for(let i = 0 ; i < email.length; i++) {
                     const letter = email.charAt(i);
                     counter[letter] = (isNaN(counter[letter]) ? 1 : counter[letter] + 1);
                 }
                 output.push(counter);
             });
            this.setState({
                frequency: output,
            });
        }).catch(err => {
        console.log(err);
    });
}

//function to handle duplicate emails
handleDuplicate() {
    axios.get('https://vibrant-noyce-249d90.netlify.com/api/v2/users.json', config)
        .then(res => {
            const emails = [];
            const similarEmails = [];
            const people = res.data.data;
            people.map((person) => {
                if (person.email) {
                    emails.push(person.email);
                }
            });
            //[a, b, c , d, e]
            emails.forEach((email, i) => {
                for (let j = (i + 1); j < emails.length; j++) {
                    let similarity = stringSimilarity.compareTwoStrings(email, emails[j]);
                    if (similarity > 0.8) { // 0 - 1, higher numbers indicate greater similarity
                        similarEmails.push(email);
                        break;
                    }
                }
            });
            console.log('similar emails: ', similarEmails)
            this.setState({ similarEmails });
        })
        .catch(err => {
            console.log('err: ', err)
        })
}

//Render the state for the buttons and the state of the app
    render() {
    console.log(this.state.frequency);
        return (

            <div>

                <div className="container">
                    <h1>Data Search</h1>
                </div>
                <Grid>
                    <Col xs={4} sm={6} smOffest={2}>
                        <Button onClick={this.handleFrequency} bsStyle="primary">Unique Frequency Count</Button>
                        <div>
                        {this.state.frequency.map((email, index) => (
                            <table key={index}>
                                <thead>
                                <tr>
                                    <th>character</th>
                                    <th>Count</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.keys(email).map((e) =>(
                                    <tr>
                                        <td>{e}</td>
                                        <td>{email[e]}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ))}
                        </div>
                    </Col>
                    <Col xs={4} sm={6} smOffest={2}>
                        <Button bsStyle="primary" onClick={this.handleDuplicate}>Duplicate Count</Button>
                        <ul>
                            {this.state.similarEmails.map((email, i) => {
                                    return (<li key={i}>{email}</li>)
                                }
                            )}
                        </ul>
                    </Col>
                </Grid>
            </div>

        )
    }
}