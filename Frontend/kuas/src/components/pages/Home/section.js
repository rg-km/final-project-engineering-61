import React from 'react';
import './section.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

function Section({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__section' : 'home__section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home_subtitle white'
                      : 'home_subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/register'>
                  <Button buttonSize='btn--large' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__img-wrapper'>
                <img src={img} alt={alt} className='home__img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;