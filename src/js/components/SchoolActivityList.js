import React from 'react'
import SchoolActivityItem from './SchoolActivityItem'
import 'less/schoolactivitylist.less'

const SchoolActivityList = (props) =>(
    <div className="schoolactivitylist">
        <h4 className="uk-header title">School Activities</h4>
        <dl className="uk-description-list uk-margin-remove">
            {
                <SchoolActivityItem/>
            }
        </dl>
    </div>
)

export default SchoolActivityList;