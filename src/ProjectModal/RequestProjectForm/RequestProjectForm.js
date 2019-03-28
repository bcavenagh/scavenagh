import React, { Component } from 'react';
import classes from './RequestProjectForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import emailjs from 'emailjs-com';


class RequestProjectForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            user_id:process.env.REACT_APP_EMAIL_USER_ID,
        }
    }
    sendFeedback = (values) => {
        console.log('serviceId:' + this.state.service_id)
        console.log('templateId:' + this.state.template_id)
        console.log('userId:' + this.state.user_id)
        // this.setState({
        //     formSubmitted: true
        // });
        window.emailjs
          .send(
                this.state.service_id, 
                'request_template', 
                values, 
                this.state.user_id
                )
                .then(res => {
                    this.setState({
                        finishedSend: true
                    });
                })
          // Handle errors here however you like
          .catch(err => (
            //   this.setState({
            //     snackbarOpen: true,
            //     errorMessage: "You have entered an invalid email address!"
            // })
            console.log(err)
            , err));
    }
    render(){
        return(
            <div className={classes.RequestProjectForm}>
                <h4>Request this project</h4>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        this.sendFeedback(values);
                        console.log(values)
                        setSubmitting(false);
                        }, 400);
                    }}
                    
                    >
                    {({ isSubmitting }) => (
                        <Form className={classes.Form}>
                            <Field type="name" name="name" placeholder="Name*" className={classes.FormInput}/>
                            <Field type="email" name="email" placeholder="Email*" className={classes.FormInput}/>
                            <ErrorMessage name="email" component="div" />
                            <Field component="textarea" name="message" placeholder="Message*" className={classNames(classes.FormInput, classes.TextArea)}/>
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
export default RequestProjectForm; 