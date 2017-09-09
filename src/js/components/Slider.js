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
            <div className="slide uk-height-medium uk-background-norepeat uk-background-cover" key={i} style={{
                'backgroundImage':`url(${slide.src})`
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
                    <h3 className="uk-header title uk-text-center uk-margin-small-bottom">Featured News</h3>
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
                <div className="details uk-width-1-5 uk-flex uk-flex-column uk-flex-between uk-padding-remove-bottom">
                    <div className="uk-flex uk-flex-middle date">
                        <span data-uk-icon="icon: calendar"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            September 09, 2017 <br/>
                            <strong>12:00PM</strong>
                        </span>
                    </div>
                    <div className="uk-flex uk-flex-middle address">
                        <span data-uk-icon="icon: location"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            <strong>Noveleta Elementary School</strong> <br/>
                            837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105
                        </span>
                    </div>
                    <div className="uk-flex uk-flex-middle summary">
                        <span data-uk-icon="icon: info"></span>
                        <span className="detail uk-text-small uk-margin-small-left">
                            Ang selebrasyon ng Buwan ng Wika ay noong Agosto 26, 2016. Ito ay ipinagdiriwang upang bigyang halaga ang ating sariling wika. Nagkaroon kami ng iba't ibang gawain sa bawat baitang. Para sa mga Preschool may coloring contest, sa mga Primary naman ay nagpaligsahan sila sa pagbigkas ng tula. Sa mga Intermediate naman ay ang paggawa ng poster at ang huli ay ang High school na gumawa ng tula tungkol sa tema na 'Filipino:Wika ng Karunungan'. Nagkaroon din kami ng food stalls na nagbebenta ng mga pagkaing Pilipino at ukay-ukay.
                        </span>
                    </div>
                    <button className="uk-button readme uk-text-capitalize">Read More</button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        $(document).ready(function() {
            var owl = $(".owl-carousel");
            var listItem = $(".slider > .list .item");

            owl.on('initialized.owl.carousel',function(){
                listItem.eq(0).addClass('active').siblings().removeClass('active');
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
                var page = e.page;
                listItem.eq(page.index).addClass('active').siblings().removeClass('active');
            })
        })
    }
}

export default Slider;