import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import * as blogService from '../services/blogs';


class PrivateHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        fetch('/api/blogs')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({list: responseJson})
            })
    }

    
    
    render() {
        return <div>
        <h1>My Blog</h1>
        <Link to={'/admin/createPost'}><p>create blog post</p></Link>
        {this.state.list.slice().reverse().map((x) => {
            return (
                <div key={x.id}>
                    <h2>{x.title}</h2>
                    <p>{x.content}</p>
                    <Link to={`/admin/edit/${x.id}`}><p>edit</p></Link> 
                </div>
                
            )
        })}
        </div>
    }
}

export default PrivateHome;