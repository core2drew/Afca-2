import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import 'uikit/src/less/uikit.theme.less';
import 'less/index.less';

class AfcaApp extends Component {
    render(){
        return(
            <div id="AfcaApp">
                <Navigation logoSrc='../assets/afca-logo.png' logoName="Abraham's Flock Christian Academy"/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }

    componentDidMount(){
        UIkit.use(Icons);
    }
}

export default AfcaApp;