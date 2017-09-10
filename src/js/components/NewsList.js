import React from 'react'
import NewsItems from './NewsItem'
import 'less/newslist.less'

const NewsList = (props) => (
    <div className="newslist">
        <h4 className="uk-header title">News</h4>
        <dl className="uk-description-list uk-margin-remove">
            {
                <NewsItems/>
            }
        </dl>
    </div>
)

export default NewsList