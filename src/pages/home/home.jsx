import React from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/card/card';
import Logements from '../../data/data.json';

function Home() {
    return (
            <>
            <Header />
            {Logements.map((Logement) => (
             <Card cover={Logement.cover} title={Logement.title} key={Logement.id}/>
            
            ))}            
            </>
    );
  }

export default Home;