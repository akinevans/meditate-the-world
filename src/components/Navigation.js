import React from "react";
import "./Navigation.css";
import globe from "../icons/globe.png";
import Button from "./Button";

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
        <div className='nav-links-button-wrapper'>
          <a href=''>{props.link1}</a>
          <a href=''>{props.link2}</a>
          <a href=''>{props.link3}</a>
          <Button className='btn btn-white' title='Book a meeting' />
        </div>
      </div>
    </nav>
  );
}
