  
import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bucharest University of Economic Informatics in English" where="Bachelor of Economic Informatics in english" from="2019" to="Present"/>
            <Widecard title="'Central School' National College Bucharest" where="Field in Mathematics-Informatics" from="2015" to="2019"/>
            </div>
            )
        }
    }
    
export default Education