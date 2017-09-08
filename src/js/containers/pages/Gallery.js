import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as galleryActions from '../../actions/gallery';
import 'less/gallery.less';

class Gallery extends Component {
    render(){
        return(
            <div id="Gallery">
                <h1>{this.props.gallery.message}</h1>
            </div>
        )
    }

    componentDidMount(){
        this.props.actions.init();
    }
}

const mapStateToProps = (state) => (
    {
        gallery: state.gallery
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(galleryActions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);