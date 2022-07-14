import './Hero.css';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? '165px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Ideal body in here we will help you to shape and build your ideal
              body and live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>experts coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={900} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={25} delay='4' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div
          className='heart-rate'
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
        >
          <img src={Heart} alt='imagen de corazon rojo' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt='men in sport' className='hero-image' />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt='líneas'
          className='hero-lines-back'
        />
        {/* calories */}
        <motion.div
          className='calories'
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
        >
          <img src={Calories} alt='imagen de calorias' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;