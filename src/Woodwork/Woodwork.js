import React, { Component } from 'react';
import classes from './Woodwork.module.scss';
import DisplayWork from '../DisplayWork/DisplayWork';

class Woodwork extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {
                    name:'Woodwork #1',
                    desc:'This is test number 1.',
                    price:'$150'
                },
                {
                    name:'Woodwork #2',
                    desc:'This is test number 2.',
                    price:'$150'
                },
                {
                    name:'Woodwork #3',
                    desc:'This is test number 3.',
                    price:'$150'
                },
                {
                    name:'Woodwork #4',
                    desc:'This is test number 4.',
                    price:'$150'
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <DisplayWork projects={this.state.projects}/>
            </div>
        );
    }
}
export default Woodwork; 