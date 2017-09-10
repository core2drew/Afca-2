import React from 'react';
import {Link} from 'react-router-dom';
import 'less/navigation.less';

const Navigation = (props) => (
    <div id='MainNav'>
            <nav className="uk-container uk-navbar-container uk-container-expand uk-navbar uk-navbar-transparent uk-width-1-1 uk-box-shadow-medium" data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" data-uk-navbar>
                    <a className="uk-navbar-left uk-logo uk-padding-small uk-padding-remove-vertical uk-padding-remove-left uk-text-bold" href="/">
                        <img src={props.logoSrc} className="navlogo uk-margin-small-right"/>
                        {props.logoName}
                    </a>
                    <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                    <li>
                                            <Link to='/' className='link uk-link-reset uk-text-capitalize'>Home</Link>
                                    </li>
                                    <li>
                                            <Link to='/gallery' className='link uk-link-reset uk-text-capitalize'>Gallery</Link>
                                    </li>
                                    <li>
                                            <Link to='/students' className='link uk-link-reset uk-text-capitalize'>Students</Link>
                                    </li>
                                    <li>
                                            <Link to='/nsc' className='link uk-link-reset uk-text-capitalize'>NSC</Link>
                                    </li>
                                    <li>
                                            <Link to='/contactus' className='link uk-link-reset uk-padding-remove-right uk-text-capitalize'>Contact Us</Link>
                                    </li>
                            </ul>
                    </div>
            </nav>
    </div>
);

export default Navigation;