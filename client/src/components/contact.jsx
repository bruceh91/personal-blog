import React, { Component } from 'react'
import { sendContactEmail } from '../services/contact'

class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleName(name) {
        this.setState({ name })
    }

    handleEmail(email) {
        this.setState({ email })
    }

    handleMessage(message) {
        this.setState({ message })
    }

    handleSubmit(e) {
        e.preventDefault()
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            this.props.history.push('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={ (e) => this.handleName(e.target.value) } id="name" className="form-control" require="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input onChange={ (e) => this.handleEmail(e.target.value) } id="email" className="form-control" require="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <textarea onChange={ (e) => this.handleMessage(e.target.value) } cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default Contact