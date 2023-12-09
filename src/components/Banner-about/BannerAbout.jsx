import React from 'react';
import './BannerAbout.css';
import about_cover from '../../Assets/about_cover.png';

function BannerAbout() {
    return (

		<>	

           <div className='bannerAbout'>
                <img className='bannerImgAbout' src={about_cover} alt="Photo de la bannière About"/> 
           </div>

		</>
    );
  }

  export default BannerAbout;