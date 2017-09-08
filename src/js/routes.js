import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';
import AfcaApp from './containers/AfcaApp';
import Gallery from './containers/Gallery';
import Home from './containers/Home';

const Routes = (
    <Router history={browserHistory}>
        <AfcaApp>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/gallery" component={Gallery}/>
            </Switch>
        </AfcaApp>
    </Router>
)

export default Routes;