import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends React.Component {
    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }, 
    };

    handleChange = e => {
        //const nextForm = this.state.form
        //nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault ();
        this.setState({ loading: true, error: null})
        
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
    };

    render() {
        return (
            <>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" 
                         src={header}
                         alt="logo"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://s.gravatar.com/avatar/98475de69853094a8e3c84f9c87181f9?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BadgeNew;