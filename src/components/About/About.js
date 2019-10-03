import React, { Component } from 'react';
import Diamonds from '../Diamonds/Diamonds';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth >= 768
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <div className="main">
                    <div className="flex-box-between baseline">
                    {isDesktop? (<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>):(<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>)} 
                       {isDesktop ? (<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><a className="white" href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a className="white" href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">Contact Me</a></h4></div>
                        </div>):(<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><a className="white" href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a  className="white" href="/#/contact">Contact Me</a></h4></div>
                        </div>)} 
                    </div>
                    
                        <div className="row-padding"></div>
                  <div className="flex-box-left">
                        <div className="column-6 column-md-12">
                            <img src={require('../images/lars.jpg')} alt="Lars headshot" className="lars"/>
                        </div>
                      <div className="column-1"></div>
                        <div className="column-5 column-md-12">
                           
                              <div className={`about-text-`+ isDesktop}>{isDesktop? (<h3 className="list-border">Hi, I'm Lars!</h3>):(<h3>Hi, I'm Lars!</h3>)}
                                <p>I'm an academic technologist and web developer based in the Greater Boston area. I currently design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work.</a> Specifically, I provide consultations to faculty about using technology in their teaching: from helping them select appropriate tools for any given task to building complete educational environments. I am driven by my commitments to usability, critical thinking, scalability, and accessibility when developing student learning experiences. </p>
                               
                               <p> I'm interdisciplinary and collaborative at my core. I love working with teams across institutions to iteratively improve on processes or to rethink how things are done.</p>
                               <p>I earned a doctorate from the University of Minnesota, where I explored the impacts of technology - <a href={require('../images/AfterlifeData.pdf')} target="_blank" rel="noopener noreferrer" title="Afterlife of Data">specifically, systems design</a> - on marginalized people. Before that, I earned a Bachelor's degree from Hampshire College, where my I learned the power of experimental education first-hand. My interest in information architecture and user centered design flourished during my doctoral program, as did my interest in building software. As a result, I went through a rigorous training in <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack web development.</a> I get immense joy from building web applications and architecting the relationships between tables in a database.</p>

                               <p> I am on <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter,</a> but I usually just delete my tweets. In my spare time, I  am training to make the perfect pizza. I already have the perfect <a href="https://res.cloudinary.com/dnrk3irn4/image/upload/v1555811740/IMG_0366.jpg" target="_blank" rel="noopener noreferrer">dog.</a></p>
                        
                            {!isDesktop && <div className="margin-top"><Diamonds /></div>}
                    </div>
                    </div>
                    <div className="margin-bottom">
                    </div>
              
                    </div>
            </div>
        );
    }
}

export default Projects; 