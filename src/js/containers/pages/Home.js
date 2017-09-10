import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as homeActions from '../../actions/home'
import 'less/home.less'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import NewsList from '../../components/NewsList'
import SchoolActivityList from '../../components/SchoolActivityList'
import DayVerse from '../../components/dayverse'


class Home extends Component {
    render(){
        if(this.props.home.sliderdata.length <= 0) {
            return false
        }
        return(
            <div id="Home">
                <Banner style={{'backgroundImage':'url(../assets/dare_to_dream.jpg)'}}/>
                <div id="Content" className="uk-container">
                    <Slider slides={this.props.home.sliderdata}/>
                    <div className="uk-margin-medium-bottom uk-grid-small" data-uk-grid>
                        <div className="uk-width-4-5 column">
                            <div className="about uk-width-1-1 uk-padding-small uk-margin-small-bottom">
                                <h4 className="uk-header uk-margin-small-bottom">
                                    About Abraham's Flock Christian Academy
                                </h4>
                                <p className="uk-margin-small-top uk-text-small uk-margin-remove">
                                    A school committed to helping you grow into a responsible and productive member of the Christian community. A wholesome educational formation is possible only through cooperative efforts exerted by both the home and school. Consistency of purpose and the manner by which it is achieved is a basic requirement to this end; policies and regulations are established to insure the educational growth of students.
                                </p>
                            </div>
                            <div className="about uk-width-1-1 uk-padding-small uk-margin-small-bottom">
                                <h4 className="uk-header title uk-margin-small-bottom">
                                    Abraham's Flock Christian Academy is...
                                </h4>
                                <p className="uk-margin-small-top uk-text-small uk-margin-remove">
                                    A Christian School that uses an American International Standard Curriculum of the SCHOOL OF TOMORROW SYSTEM; which is a world-class, trend-setter, cutting-edge in educational reform. School of Tomorrow is a pre-school, primary and secondary academic program that combines the traditional one-room school with completely individualized, diagnostically-prescribed high tech learning.
                                </p>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2 column">
                                    <NewsList/>
                                </div>
                                <div className="uk-width-1-2 column">
                                    <SchoolActivityList/>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-5 column">
                            <DayVerse/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.props.actions.init();
    }
}

const mapStateToProps = (state) => (
    {
        home: state.home
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(homeActions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);