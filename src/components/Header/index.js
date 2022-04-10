import PropTypes from 'prop-types';
import './header.scss';
import LogoGit from 'src/assets/images/logo-github.png';

function Header() {
  return (
    <header>
      <img src={LogoGit} alt="Logo GitHub" className="headerlogo" />
    </header>
  );
}

export default Header;
