import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';
import AfcaApp from './containers/AfcaApp';
import {Home, AboutUs, Gallery} from './containers/pages'

const Routes = (
    <Router history={browserHistory}>
        <AfcaApp>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/gallery" component={Gallery}/>
            </Switch>
        </AfcaApp>
    </Router>
)

export default Routes;