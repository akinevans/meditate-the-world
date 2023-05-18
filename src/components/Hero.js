import React from "react";
import yoga1 from "../images/yoga1.jpg";
import yoga2 from "../images/yoga2.jpg";
import yoga3 from "../images/yoga3.jpg";
import alert from "../icons/exclamation.png";
import small_green from "../images/small-green.svg";
import small_brown from "../images/small-brown.svg";
import med_brown from "../images/med-brown.svg";
import green_planet from "../images/green-planet.svg";

import "./Hero.css";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Hero(props) {
  const images = [yoga1, yoga2, yoga3];

  // display random image
  function generateImage() {
    const randomNum = Math.floor(Math.random() * 3);
    return images[randomNum];
  }

  // choose if image should be flipped horizontally
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
          <p className='hero-text'>
            Experience tranquility and inner peace at our meditation studio,
            where expert instructors guide you through a transformative journey
            of self-discovery. Whether you're a beginner or an experienced
            practitioner, our serene environment and carefully curated sessions
            provide the ideal space to unwind, recharge, and cultivate
            mindfulness.
          </p>
          <form>
            <label>
              <input
                className='input-form'
                type='text'
                name='name'
                placeholder='Type your email.'
              />
            </label>
            <Button className='btn btn-blue' title='Book a meeting' />
          </form>
          <div className='alert-wrapper'>
            <img src={alert} alt='' className='alert' />
            <p className='alert-text'>
              We'll respond within 24 hours respectively
            </p>
          </div>
        </div>
        <motion.div
          className='hero-image-wrapper'
          initial={{ y: "0px" }}
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{
            ease: "linear",
            duration: 4.5,
            // yoyo: Infinity,
            repeat: Infinity,
          }}
        >
          {/* Maybe only use width on images as to not distort it */}
          <img
            src={generateImage()}
            alt='floating yoga illustration'
            className={flipImage() ? "flip" : null}
          />
        </motion.div>
        {/* Images for animation */}
        <motion.div
          className='green-planet'
          initial={{ y: "0px" }}
          animate={{ y: [0, -35, 0] }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
          }}
        >
          <img src={green_planet} alt='green planet' />
        </motion.div>

        <motion.div
          className='small-brown'
          initial={{ y: "0px" }}
          animate={{ y: [0, -25, 0] }}
          transition={{
            ease: "linear",
            duration: 3.2,
            repeat: Infinity,
          }}
        >
          <img src={small_brown} alt='brown blob' />
        </motion.div>
        <motion.div
          className='small-green'
          initial={{ y: "0px" }}
          animate={{ y: [0, -30, 0] }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
          }}
        >
          <img src={small_green} alt='green blob' />
        </motion.div>

        <motion.div
          className='med-brown'
          initial={{ y: "0px" }}
          animate={{ y: [0, -18, 0, 18, 0] }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
        >
          <img src={med_brown} alt='brown blob' />
        </motion.div>

        <motion.div
          className='small-green-2'
          initial={{ y: "0px" }}
          animate={{ y: [0, -40, 0, 40, 0] }}
          transition={{
            ease: "linear",
            duration: 6,
            repeat: Infinity,
          }}
        >
          <img src={small_green} alt='green blob' />
        </motion.div>

        <motion.div
          className='small-brown-2'
          initial={{ y: "0px" }}
          animate={{ y: [0, -35, 0, 35, 0] }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
        >
          <img src={small_brown} alt='brown blob' />
        </motion.div>

        <motion.div
          className='small-brown-3'
          initial={{ y: "0px" }}
          animate={{ y: [0, -35, 0, 35, 0] }}
          transition={{
            ease: "linear",
            duration: 6,
            repeat: Infinity,
          }}
        >
          <img src={small_brown} alt='brown blob' />
        </motion.div>

        {/* End  hero inner wrapper*/}
      </div>
    </section>
  );
}
