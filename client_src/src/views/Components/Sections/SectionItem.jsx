import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import SectionLoginDB from './SectionLoginDB'


class SectionItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <li>
            <Link to={`/charidbs/${this.state.item.id}`}>
            {this.state.item.user}</Link>
            </li>
        )
    }
}

export default (SectionItem);