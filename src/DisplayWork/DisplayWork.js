import React from 'react';
import classes from './DisplayWork.module.scss';

const displayWork = (props) => {
    return(
        <div className={classes.DisplayWorkContainer}>
            {props.projects.map((projects, index) => 
                <div className={classes.Project}>
                    {/* <img src="https://via.placeholder.com/250"/> */}
                    <div className={classes.ProjectInfo}>
                        <h3 className={classes.ProjectTitle}>{projects.name}</h3>
                        <p className={classes.ProjectPrice}>{projects.price}</p>
                        <button className={classes.ProjectDetailsButton}>View Details</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default displayWork; 