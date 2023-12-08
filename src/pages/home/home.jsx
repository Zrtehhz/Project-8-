import React from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import Logements from '../../data/data.json';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

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