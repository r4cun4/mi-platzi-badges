import React from 'react'
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

//Creamos un componente nuevo para armar la estructura de la lista este no se exporta porque se una en el mismo js

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email}/>
                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />{this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

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
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgesListItem badge={badge} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;

//{badge.email}<br /> {badge.jobTitle}
//{badge.twitter}<br /> {badge.avatarUrl}