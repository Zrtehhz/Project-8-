import React from 'react';
import './error.css'; 
import Footer from '../../Components/Footer/Footer';
import Header from '../../components/Header/Header';

function ErrorPage() {
  return (
    <><>
          <Header />
      </><div className="ErrorPage">
              <h1>404</h1>
              <p>Oups! La page que vous demandez n'existe pas.</p>
              <a href="/">Retourner à l'accueil</a>
              
          </div><>
          <Footer />

          </></>
  );
}

export default ErrorPage;
