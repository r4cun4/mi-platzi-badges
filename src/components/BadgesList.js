import React from 'react'
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length ===0) {
            return (
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
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