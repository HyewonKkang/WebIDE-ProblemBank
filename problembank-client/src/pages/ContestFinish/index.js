import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ContestFinishPage from './pages/ContestFinishPage';

function Contest() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path = {`${match.url}`} component = {ContestFinishPage} />       
        </Switch>
    )
}

export default Contest

