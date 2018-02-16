import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';
import * as blogService from '../services/blogs';

class Edit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            oldBlog: '',
            id: this.props.match.params.id
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleClickEdit = this.handleClickEdit.bind(this)
    }

    componentDidMount() {
        console.log('attempt get')
        blogService.one(this.state.id)
            .then((response) => {
                this.setState({ oldBlog: response })
            })
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
        console.log(this.state.title)
    }

    handleContentChange(event) {
        this.setState({ content: event.target.value });
        console.log(this.state.content)
    }

    handleClickEdit(event) {
        let stuff = { content: this.state.content, title: this.state.title }
        blogService.update(this.state.id, stuff)
        window.location.reload()
    }

    handleClickDel(event) {
        blogService.destroy(this.state.id)
        window.location.href = '/admin/home'
    }

    render() {

        return <div>
            <h1>Original Blog Post</h1>
            <div key={this.state.oldBlog.id}>
                <h2>{this.state.oldBlog.title}</h2>
                <p>{this.state.oldBlog.content}</p>
            </div>
            <h1>Write changes below</h1>
            <h4>Title:</h4><input type="text" value={this.state.title} onChange={this.handleTitleChange} /><br />
            <h4>Blog:</h4><textarea type="text" value={this.state.content} onChange={this.handleContentChange} /><br />
            <button onClick={() => this.handleClickEdit()}>post changes</button>
            <button onClick={() => this.handleClickDel()}>Delete this post</button>
        </div>
    }
}

export default Edit;