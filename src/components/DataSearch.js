import React, { Component } from 'react'
import { Grid, Col, Button} from 'react-bootstrap';
import './DataSearch.css';

export default class About extends Component {

    render() {

        return (

            <div>

                <div className="container">
                    <h1>Data Search</h1>
                </div>
                <Grid>
                    <Col  xs={12} sm={8} smOffest={2}>
                        <Button bsStyle="primary">Unique Frequency Count</Button>
                    </Col>
                    <Col>
                        <Button bsStyle="primary">Duplicate Count</Button>

                    </Col>
                </Grid>
            </div>

        )
    }
}