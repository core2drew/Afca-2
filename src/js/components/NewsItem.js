import React from 'react'
import 'less/newsitem.less'

const NewsItem = (props) => (
    <div className="news-item uk-flex uk-position-relative uk-margin-small-bottom">
        <div className="readme uk-width-1-1 uk-height-1-1 uk-position-absolute uk-flex uk-flex-center uk-flex-middle">
            <h5 className="uk-header uk-margin-remove">Read More</h5>
        </div>
        <div className="image uk-background-cover" style={{
            'backgroundImage':`url(http://www.laughspark.info/uploadfiles/funny-sqiuurel-talking-imags-i-5922.jpg)`
        }}></div>
        <div className="description uk-margin-small-left uk-flex uk-flex-column uk-flex-center">
            <h5 className="uk-header date uk-text-bold">09/09/17</h5>
            <dt>Title</dt>
            <dd className="uk-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
        </div>
    </div>
)

export default NewsItem