import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogService from '../services/blogs';

class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }



    handleTitleChange(event) {
        this.setState({ title: event.target.value });
        console.log(this.state.title)
    }

    handleContentChange(event) {
        this.setState({ content: event.target.value });
        console.log(this.state.content)
    }

    handleClick(event) {
        let stuff = { title: this.state.title , content: this.state.content}
        blogService.insert(stuff)
    }

    render() {

        return <div>
            <h1>Create</h1>
            <h4>Title:</h4><input type="text" value={this.state.title} onChange={this.handleTitleChange} /><br />
            <h4>Blog:</h4><textarea type="text" value={this.state.content} onChange={this.handleContentChange} /><br />
            <button onClick={this.handleClick}>post input</button>
        </div>
    }
}

export default Create;