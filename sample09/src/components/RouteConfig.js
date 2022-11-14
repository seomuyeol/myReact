import React from "react";
import { Switch, Route } from "react-router-dom";

import PeopleListContainer from "../containers/PeopleListContainer";
import PersonForm from "../containers/PersonForm";
  
export default class RouteConfig extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={PeopleListContainer} />
                <Route path="/new" component={PersonForm} />
            </Switch>
        );
    }
};