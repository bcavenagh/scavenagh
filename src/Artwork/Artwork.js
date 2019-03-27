import React, { Component } from 'react';
import classes from './Artwork.module.scss';
import DisplayWork from '../DisplayWork/DisplayWork';
class Artwork extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {name: 'Artwork #1', desc:'This is artwork 1.', price:'$199'},
                {name: 'Artwork #2', desc:'This is artwork 2.', price:'$199'},
                {name: 'Artwork #3', desc:'This is artwork 3.', price:'$199'},
                {name: 'Artwork #4', desc:'This is artwork 4.', price:'$199'},
            ]
        }
    }
    render(){
        return(
            <DisplayWork title="Artwork" projects={this.state.projects} wood={false}/>
        );
    }
}
export default Artwork; 