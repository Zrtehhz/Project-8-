import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Logements from '../../data/data.json';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

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