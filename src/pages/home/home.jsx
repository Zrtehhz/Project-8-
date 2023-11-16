import React from 'react';
import Header from '../../Components/header/header';
import Card from '../../Components/card/card';
import Logements from '../../data/data.json';
import Footer from '../../Components/footer/footer';
import Banner from '../../Components/banner/banner';

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