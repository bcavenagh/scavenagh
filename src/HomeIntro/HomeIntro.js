import React from 'react';
import classes from './HomeIntro.module.scss';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const homeIntro = (props) => {
    return(
        <div className={classes.HomeIntro}>
            <h1 className={classes.Sean}>Sean Cavenagh</h1>
            <p>Carpenter, Artist, Handyman</p>
            <div className={classes.social}>
                <a href="#" className={classes.SocialLink}><FaFacebookF className={classes.SocialIcon}/></a>
                <a href="#" className={classes.SocialLink}><FaInstagram className={classes.SocialIcon}/></a>
                <a href="#" className={classes.SocialLink}><FaPinterestP className={classes.SocialIcon}/></a>
            </div>
            <hr className={classes.hr}/>
        </div>
    );
};

export default homeIntro; 