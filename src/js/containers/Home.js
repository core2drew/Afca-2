import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import 'less/home.less';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import News from '../components/News';
import SchoolActivies from '../components/SchoolActivies';

class Home extends Component {
    render(){
        return(
            <div id="Home">
                <Banner style={{'backgroundImage':'url(../assets/dare_to_dream.jpg)'}}/>
                <div id="Content" className="uk-container">
                    <Slider slides={[{
                            title:'Cat',
                            src:'http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg'
                        }, {
                            title:'Squirrel',
                            src:'http://www.laughspark.info/uploadfiles/funny-sqiuurel-talking-imags-i-5922.jpg'
                        }
                        ]}/>
                    <div className="uk-flex">
                        <News/>
                        <SchoolActivies/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;