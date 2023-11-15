import React from 'react';
import Header from '../../components/Header/header';
import Card from '../../components/Card/card';
import Logements from '../../data/data.json';
import Footer from '../../components/Footer/footer';
import Banner from '../../components/banner/banner';

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