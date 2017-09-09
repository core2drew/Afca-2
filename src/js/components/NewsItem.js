import React from 'react'

const NewsItem = (props) => (
    <div className="news-item uk-flex">
        <div className="image uk-background-cover" style={{
            'backgroundImage':`url(http://www.laughspark.info/uploadfiles/funny-sqiuurel-talking-imags-i-5922.jpg)`
        }}></div>
        <div className="description uk-margin-small-left">
            <h5 className="uk-header date uk-text-bold">09/09/17</h5>
            <dt>Title</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
        </div>
    </div>
)

export default NewsItem