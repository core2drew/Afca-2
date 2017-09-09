import React from 'react'
import SchoolActivityItem from './SchoolActivityItem'
import 'less/schoolactivitylist.less'

const SchoolActivityList = (props) =>(
    <div className="schoolactivitylist">
        <h3 className="uk-header title">School Activities</h3>
        <dl className="uk-description-list">
            {
                <SchoolActivityItem/>
            }
        </dl>
    </div>
)

export default SchoolActivityList;