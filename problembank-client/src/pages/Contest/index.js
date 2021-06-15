import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ContestMainPage from './pages/ContestMainPage';

function Contest(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path = {`${match.url}`} component = {ContestMainPage} />       
        </Switch>
    )
}

export default Contest

