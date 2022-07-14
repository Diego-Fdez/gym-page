import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='Logo GYM' />
      {menuOpen === false && mobile === true ? (
        <div onClick={() => setMenuOpen(true)} className='menu-bar-container'>
          <img className='menu-bar' src={Bars} alt='icono de menú' />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link
              to='home'
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='programs'
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to='programs'
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to='plans'
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to='testimonials'
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
