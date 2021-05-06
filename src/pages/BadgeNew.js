import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Rodrigo"
                                lastName="Acuña"
                                twitter="r4cun4"
                                jobTitle="React Dev Rookie"
                                avatarUrl="https://s.gravatar.com/avatar/98475de69853094a8e3c84f9c87181f9?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;