import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feedback from "./Components/StudentFeedback/Page/StudentFeedback";
import App from "./App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BrowserRouter extends Component {
    render()
    {
        return <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/StudentFeedback' component={Feedback}/>
                </Switch>
            </div>
        </Router>
    }
}

export default BrowserRouter;