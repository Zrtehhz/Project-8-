
import React from 'react';

const Erreur = () => {
    return (
        <div style={styles.container}>
            <img src="/path-to-your-image.jpg" alt="404" style={styles.image} />
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <a href="/" style={styles.link}>Retourner sur la page d’accueil</a>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
    },
    link: {
        marginTop: '20px',
        textDecoration: 'underline',
    }
}

export default Erreur;