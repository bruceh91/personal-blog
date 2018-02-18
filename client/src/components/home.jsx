import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
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
        <h1 className="text-danger text-center">My Blog</h1>
        {this.state.list.slice().reverse().map((x) => {
            return (
                <div className="border col-5 mx-auto mb-2" key={x.id}>
                    <h2 className="text-center">{x.title}</h2>
                    <h5 className="text-center ">{x.content}</h5>
                    <Link className="text-center text-wrap" to={`/blog/${x.id}`}><p>more info</p></Link>
                </div>
            )
        })}
        </div>
    }
}

export default Home;