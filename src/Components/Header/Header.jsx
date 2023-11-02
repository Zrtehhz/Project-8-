import React from 'react';
import Logo from '../../Assets/logo.png';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/banner';

import './header.css';

function Header() {
    return (

		<>	

		<header className='header'>
			<h1>
				<img className='Logo' src={Logo} alt="location d'appartements" />
			</h1>
			
		</header><Navbar /><>		
		<>
			<Banner />

		</></></>
    );
  }

  export default Header;