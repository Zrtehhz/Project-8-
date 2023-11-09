import React from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/card/Card';
import Logements from '../../data/data.json';
import Footer from '../../Components/footer/Footer';
import Banner from '../../Components/banner/Banner';

function Home() {
    return (
            <><>
        <Header />
        <Banner />

        <div className='container'>

        {Logements.map((Logement) => (
          <Card cover={Logement.cover} title={Logement.title} key={Logement.id} />
        ))}
        </div>
      </><>
          <Footer />
        </></>
    );
  }

export default Home;