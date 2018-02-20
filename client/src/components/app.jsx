import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';


import Navbar from './navbar';
import Blog from './singleBlog';
import Home from './home';
import Create from './createBlogPost';
import Admin from './privateHome';
import Edit from './edit';
import Donate from './donate';
import Thank from './thanks';
import Contact from './contact';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/blog/:id?" component={Blog} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/thanks" component={Thank} />
                        <Route path='/contact' component={Contact} />
                        <PrivateRoute path="/admin/home" component={Admin} />
                        <PrivateRoute path="/admin/createPost" component={Create} />
                        <PrivateRoute path="/admin/edit/:id" component={Edit} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;