import React from 'react'
import NewsItems from './NewsItem'
import 'less/newslist.less'

const NewsList = (props) => (
    <div className="newslist">
        <h3 className="uk-header title">News</h3>
        <dl className="uk-description-list">
            {
                <NewsItems/>
            }
        </dl>
    </div>
)

export default NewsList