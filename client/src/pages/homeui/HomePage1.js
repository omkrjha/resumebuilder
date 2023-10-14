import React, { useState } from 'react';

import './homepage1.css';
import { Typewriter } from 'react-simple-typewriter';

import temp1Img from '../templates/temp1/temp1.png';
import temp2Img from '../templates/temp2/temp2.png';
import temp3Img from '../templates/temp3/temp3.png';
import temp4Img from '../templates/temp4/temp4.png';

const HomePage1 = () => {
  const [size, setSize] = useState('large');
  return (
    <>
      <section className='hero' id='home'>
        <div className='containerz f_flex top'>
          <div className='leftz top'>
            <h3 style={{ color: 'red' }}>WELCOME TO Resume World</h3>
            {/* <h1>
              Build a Job  <span>Hari Om</span>
            </h1> */}
            <h2>
              &nbsp;
              <span>
                <Typewriter
                  words={['Build Your Dream Resume']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            {/* <section className='box'>
              <p className=''>
                You are just 3 Steps away from Creating Your Dream Resume
                <ul>
                  <li>Enter All your details in Profile Section.</li>
                  <li>TRY any resume you Like.</li>
                  <li>And Print that resume.</li>
                </ul>
              </p>
            </section> */}
            <div
              style={{ height: '35vh', width: '45vw' }}
              className='grid-container'
            >
              <section
                style={{ height: '12rem', width: '170%' }}
                className=' box '
              >
                <p>
                  You are just 3 Steps away from Creating Your Dream Resume
                  <ul>
                    <li>Enter your details in Profile Section.</li>
                    <li>TRY any resume you Like.</li>
                    <li>And Print that resume.</li>
                  </ul>
                </p>
              </section>
            </div>
            &nbsp;
            <div class='buttonContainer'>
              <a href='/profile'>
                <span>Get Started</span>
              </a>
            </div>
          </div>
          {/*  */}
          &nbsp;
          <div className='rightz'>
            <div className='imgz'>
              <img className='imgs img1' src={temp1Img} alt='' />
              <img className='imgs img2' src={temp2Img} alt='' />
              <img className='imgs img3' src={temp4Img} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage1;
