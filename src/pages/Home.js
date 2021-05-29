import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Home.css";


function Home () {
    return(
        <div className="Home">
            <Link className="btn btn-primary" to="/badges">
                Start
            </Link>
        </div>
    );
}

export default Home;
