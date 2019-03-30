import React, { Component } from 'react';
import classes from './ProjectModal.module.scss';
import RequestProjectForm from './RequestProjectForm/RequestProjectForm';
import { FaTimesCircle } from "react-icons/fa";


class ProjectModal extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className={classes.Modal}>
                <div className={classes.Image}></div>
                <div className={classes.ProjectDesc}>
                    <div className={classes.Head}>
                        <h2 className={classes.Title}>{this.props.project.name}</h2>
                        <p className={classes.Price}>{this.props.project.price}</p>
                    </div>
                    <p className={classes.Description}>{this.props.project.desc}</p>    
                    <hr className={classes.divider}/>
                    <RequestProjectForm/>
                </div>
                <div className={classes.Close} onClick={this.props.close}><FaTimesCircle/></div>
            </div>
        )
    }
}
export default ProjectModal; 