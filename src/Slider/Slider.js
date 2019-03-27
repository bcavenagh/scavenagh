import React, { Component } from 'react';
import classes from './Slider.module.scss';
import classNames from 'classnames';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className={classes.HeaderWrapper}>
                <div className={classes.slanted_carousel}>
                    <div className={classNames(classes.box, classes.carousel_right)}>
                        <div className={classNames(classes.caption, classes.right_caption, classes.text_center)}>
                            <h1>Artwork</h1>
                            <p>Homemade Artwork</p>
                            <button className={classes.Button} onClick={this.props.showArt}>View Artwork</button>
                        </div>
                    </div>
                    <div className={classes.slider}>
                        <div className={classNames(classes.box, classes.carousel_left)}>
                            <div className={classNames(classes.caption, classes.left_caption, classes.text_left)}>
                                <h1>Woodwork</h1>
                                <p>Handcrafted Woodworks</p>
                                <button className={classes.Button} onClick={this.props.showWood}>View Woodwork</button>
                            </div>
                        </div>
                        <div className={classes.BG}></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home; 