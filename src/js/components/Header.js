import React from 'react';


const Header = (props) => (
    <div id="Header">
        <img src={props.src}/>
        {props.text}
    </div>
);

export default Header;