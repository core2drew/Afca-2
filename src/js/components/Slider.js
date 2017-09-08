import React, {Component} from 'react';
import 'less/slider.less';

class Slider extends Component {

    constructor(props) {
        super(props)
        this.generateSlidesImage = this.generateSlidesImage.bind(this)
        this.generateSlideList = this.generateSlideList.bind(this)
    }

    generateSlidesImage(slides) {
        return slides.map((slide, i)=>(
            <div className="slide" key={i}>
                <img className="uk-height-medium" src={slide.src}/>
            </div>
        ))
    }

    generateSlideList(slides) {
        return slides.map((slide, i)=>(
            <li key={i}>{slide.title}</li>
        ))
    }

    render(){
        return(
            <div className="slider uk-position-relative uk-flex">
                <div className="owl-carousel uk-width-3-4">
                    {
                        this.generateSlidesImage(this.props.slides)
                    }
                </div>
                <div className="list">
                    <ul>
                        {
                            this.generateSlideList(this.props.slides)
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){
        $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 1
            });

            $(".slider > .list li").on("click", function () {
                var index = $(this).index();
                $(".owl-carousel").trigger('to.owl.carousel',[index]);
            });
        })
    }
}

export default Slider;