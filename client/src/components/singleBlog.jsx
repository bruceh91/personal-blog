import React, { Component } from 'react';
import { render } from 'react-dom';


class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogContent: []
        }
    }

    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({blogContent: responseJson})
            })
    }

    
    render() {
        return <div>
        <h1>My Blog post</h1>
                <div key={this.state.blogContent.id}>
                    <h2>{this.state.blogContent.title}</h2>
                    <p>{this.state.blogContent.content}</p>
                </div>
                
        </div>
    }
}

export default Blog;