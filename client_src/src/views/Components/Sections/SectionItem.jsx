import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SectionLoginDB from './SectionLoginDB'


class SectionItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <ul>{this.state.item.name}</ul>
        )
    }
}

export default (SectionItem);