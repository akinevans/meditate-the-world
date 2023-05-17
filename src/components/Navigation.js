import React from "react";
import globe from "../icons/globe.png";

export default function Navigation(props) {
  return (
    <nav className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='nav-logo-wrapper'>
          <img src={globe} alt='globe logo' />
          <div className='logo-text-wrapper'>
            <p className='top-text'>Medi</p>
            <p className='bottom-text'>Tate</p>
          </div>
        </div>
        <a href=''>{props.link1}</a>
        <a href=''>{props.link2}</a>
        <a href=''>{props.link3}</a>
      </div>
    </nav>
  );
}
