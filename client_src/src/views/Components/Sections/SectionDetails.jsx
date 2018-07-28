import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import SectionLoginDB from './SectionLoginDB'


class SectionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div>
                <h1>Details</h1>
            </div>
        )
    }
}

export default (SectionDetails);