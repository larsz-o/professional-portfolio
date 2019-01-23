import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button, Modal } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            isDesktop: true,
            success: false
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
    handleClose = () => {
        this.setState({
            ...this.state, 
            success: false
        })
    }
    handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/contact',
            data: this.state
        }).then((response) => {
            this.sendConfirmation();
        }).catch((error) => {
            console.log('Error submitting form.', error);
            alert('Error submitting contact form. Please try again.');
        })
    }
    sendConfirmation = () => {
        axios({
            method: 'POST',
            url: '/contact/confirmation',
            data: this.state
        }).then((response) => {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
                success: true
            });
        }).catch((error) => {
            console.log('Error posting confirmation', error);
        })
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth > 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                <Nav />
                {isDesktop ? (<form onSubmit={this.handleSubmit} className="contact-form">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer" ><img src={require('../images/twitter.png')} height="50px" alt="twitter icon" /></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer" ><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon" /></a></div>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} required />
                    </FormGroup>
                    <div className="center">
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                </form>
                ) : (<form onSubmit={this.handleSubmit} className="full-width">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer"><img src={require('../images/twitter.png')} height="50px" alt="twitter icon" /></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon" /></a></div>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} required />
                    </FormGroup>
                    <div className="center">
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                </form>)}
                <Modal show={this.state.success} onHide={this.handleClose}>
                    <Modal.Header>
                        <h3>Success!</h3>
                </Modal.Header>
                    <Modal.Body className="center"><p className="skills-list">Message sent! Check your inbox for a confirmation email.</p><img src={require('../images/emails.gif')} alt="email gif"/></Modal.Body>
                    <div className="center spacing"><Button bsStyle="info" onClick={this.handleClose}>Close</Button></div>
                </Modal>

            </section>
        );
    }
}
export default Contact; 