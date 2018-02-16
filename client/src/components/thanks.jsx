import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class Thank extends Component {

    render() {
        return <div>
        <h1>Thanks for the donation!</h1><br />
        <Link to='/'>GO HOME</Link>
        </div>
    }
}

export default Thank;