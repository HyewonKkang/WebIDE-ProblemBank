import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import DetailProblem from './pages/ContestStartPage';

function ContestStart(props) {
    const match = useRouteMatch();
    return (
        <Switch>   
            <Route exact path = {`${match.url}`} component = {DetailProblem} />      
        </Switch>
    )
}

export default ContestStart

