import React, { Component } from 'react';
import profilepic from '../CJ_2.jpg';




class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            </div>
            )
        }
    }
    
    export default Home