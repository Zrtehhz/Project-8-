import React from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Logements from '../../data/data.json';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

function Home() {
    return (
            <>
        <Header />
        <Banner />

        <div className='container'>

          {Logements.map((Logement) => (
            <Card cover={Logement.cover} title={Logement.title} key={Logement.id} id={Logement.id} />
          ))}
        </div>
          <Footer />
        </>
    );
  }

export default Home;