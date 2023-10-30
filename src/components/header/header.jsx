import React from 'react';
import Logo from './Assets/LOGO.svg';

function Header() {
    return (
<header className='header'>
			<h1>
				<img src={Logo} alt="location d'appartements" />
			</h1>
			<Navbar />
		</header>
    );
  }

export default Header;