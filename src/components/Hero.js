import React from "react";
import yoga1 from "../images/yoga1.jpg";
import yoga2 from "../images/yoga2.jpg";
import yoga3 from "../images/yoga3.jpg";
import "./Hero.css";
import Button from "./Button";

export default function Hero(props) {
  // choose if image should be flipped horizontally
  const images = [yoga1, yoga2, yoga3];

  // display random image
  function generateImage() {
    const randomNum = Math.floor(Math.random() * 3);
    return images[randomNum];
  }

  function flipImage() {
    const choices = [true, false];
    const randomNum = Math.floor(Math.random() * 2);
    return choices[randomNum];
  }

  return (
    <section className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-text-form-wrapper'>
          <h1>Meditate The World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            quibusdam, vitae veritatis adipisci ea aliquam nam molestiae
            asperiores beatae accusantium fugit fuga vel error animi expedita ut
            aliquid! Fugit, beatae.
          </p>
          <form>
            <label>
              <input
                className='input-form'
                type='text'
                name='name'
                placeholder='Enter your email'
              />
            </label>
            <Button className='btn btn-blue' title='Book a meeting' />
          </form>
        </div>
        <div className='hero-image-wrapper'>
          {/* Maybe only use width on images as to not distort it */}
          <img
            style={{ width: "600px" }}
            src={generateImage()}
            alt='floating yoga illustration'
            className={flipImage() ? "flip" : null}
          />
        </div>
      </div>
    </section>
  );
}
