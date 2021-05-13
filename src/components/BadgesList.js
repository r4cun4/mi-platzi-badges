import React, { Component } from 'react'
import './styles/BadgesList.css';

class BadgesList extends React.Component {

    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge) =>{
                return (
                    <li key={badge.id}>
                        <p>
                            Nombre y Apellido : {badge.firstName} {badge.lastName}<br />
                            email : {badge.email}<br /> Profesión : {badge.jobTitle}<br />
                            Twitter : {badge.twitter}<br /> IMG : {badge.avatarUrl}
                        </p>
                    </li>
                )
            })}
        </ul>
        )
    }
}

export default BadgesList;

//{badge.email}<br /> {badge.jobTitle}
//{badge.twitter}<br /> {badge.avatarUrl}