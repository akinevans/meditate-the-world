/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";
import dribbble from "../icons/dribbble.svg";
import instagram from "../icons/instagram.svg";
import "./Footer.css";

export default function Footer() {
  const creditLink = "https://dribbble.com/giorgimatsukatovi";
  return (
    <footer className='footer-outer-wrapper'>
      <div className='footer-inner-wrapper'>
        <div className='social-wrapper'>
          <img src={twitter} alt='' />
          <img src={facebook} alt='' />
          <img src={dribbble} alt='' />
          <img src={instagram} alt='' />
        </div>
        <div className='footer-spacer'></div>
        <a href={creditLink} className='credit' target='_blank'>
          UI Design By Giorgi
        </a>
      </div>
    </footer>
  );
}
