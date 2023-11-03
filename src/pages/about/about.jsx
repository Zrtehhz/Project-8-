import './about.css';
import React from 'react';
import Header from '../../components/Header/Header';
import BannerAbout from '../../components/banner-about/banner-about';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/collapse/collapse';

function About() {
    return (
            <>
            <Header />
            <BannerAbout />
            <Collapse />
            <Footer />

            </>
    );
  }

export default About;