import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='Footer-container' id='footer'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Github} alt='logo GitHub' />
          <img src={Instagram} alt='logo Instagram' />
          <img src={LinkedIn} alt='logo LinkedIn' />
        </div>
        <div className='logo-f'>
          <img src={Logo} alt='logo company' />
        </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  );
};

export default Footer;
