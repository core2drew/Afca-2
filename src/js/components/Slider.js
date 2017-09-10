import React, {Component} from 'react';
import 'less/slider.less';

class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
        this.sliderInit = this.sliderInit.bind(this)
        this.generateSlidesImage = this.generateSlidesImage.bind(this)
        this.generateSlideList = this.generateSlideList.bind(this)
    }

    sliderInit(){
        var _this = this;

        $(document).ready(function() {
            var owl = $(".owl-carousel");
            var listItem = $(".slider > .list .item");

            owl.on('initialized.owl.carousel',function(){
                listItem.eq(0).addClass('active').siblings().removeClass('active');
                _this.setState({
                    currentIndex: 0,
                })
            })

            owl.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 1,
                navText:[
                    "<a uk-slidenav-previous className='uk-light'></a>",
                    "<a uk-slidenav-next className='uk-light'></a>"
                ]
            });

            listItem.on("click", function () {
                var $this = $(this);
                var index = $this.index();
                $this.addClass('active').siblings().removeClass('active');
                owl.trigger('to.owl.carousel',[index]);
            });

            owl.on('changed.owl.carousel', function(e) {
                var index = e.page.index;
                listItem.eq(index).addClass('active').siblings().removeClass('active');

                _this.setState({
                    currentIndex: index,
                })
            })
        })
    }

    generateSlidesImage(slides) {
        return slides.map((slide, i)=>(
            <div className="slide uk-height-medium uk-background-norepeat uk-background-cover" key={i} style={{
                'backgroundImage':`url(${slide.image})`
            }}>
            </div>
        ))
    }

    generateSlideList(slides) {
        return slides.map((slide, i)=>(
            <li className="item uk-padding-small uk-padding-remove-vertical" key={i}>{slide.title}</li>
        ))
    }

    render(){
        return(
            <div className="slider uk-position-relative uk-flex uk-margin-small-bottom">
                <div className="list uk-width-1-5">
                    <h4 className="uk-header title uk-text-center uk-margin-small-bottom">Featured News</h4>
                    <ul className="uk-list uk-margin-small-top">
                        {
                            this.generateSlideList(this.props.slides)
                        }
                    </ul>
                </div>
                <div className="owl-carousel uk-width-3-5 uk-flex-middle uk-position-relative">
                    {
                        this.generateSlidesImage(this.props.slides)
                    }
                </div>
                <div className="details uk-width-1-5 uk-flex uk-flex-column uk-flex-between">
                    <div className="uk-flex uk-flex-middle date">
                        <span data-uk-icon="icon: calendar"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            {this.props.slides[this.state.currentIndex].date} <br/>
                            <strong>{this.props.slides[this.state.currentIndex].time}</strong>
                        </span>
                    </div>
                    <div className="uk-flex uk-flex-middle address">
                        <span data-uk-icon="icon: location"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            <strong>{this.props.slides[this.state.currentIndex].location}</strong> <br/>
                            {this.props.slides[this.state.currentIndex].address}
                        </span>
                    </div>
                    <div className="uk-flex uk-flex-middle summary">
                        <span data-uk-icon="icon: info"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            {this.props.slides[this.state.currentIndex].summary}
                        </span>
                    </div>
                    <button className="uk-button readme uk-text-capitalize">Read More</button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.sliderInit();
    }
}

export default Slider;