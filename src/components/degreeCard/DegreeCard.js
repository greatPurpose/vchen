import React, { Component } from 'react';
import './DegreeCard.css';
import {Fade} from 'react-reveal';


class DegreeCard extends Component {
    render() {
        const degree = this.props.degree;
        return (
            <div className="degree-card">                        
                <Fade right duration={2000} distance="40px">
                        <div className="card-body">
                            <div className="body-header">
                                <div className="body-header-title">
                                    <h2 className="card-title">{degree.title}</h2>
                                    <h3 className="card-subtitle">{degree.subtitle}</h3>
                                </div>
                                <div className="body-header-duration">
                                    <h3 className="duration">{degree.duration}</h3>
                                </div>
                            </div>                            
                        </div>
                </Fade>
            </div>
        );
    }
}

export default DegreeCard;