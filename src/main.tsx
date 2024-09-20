import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos'; // Importa AOS

// Importa i CSS dei vendor
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';

import './assets/css/main.css';
import './assets/css/custom.css';

// Importa i JavaScript dei vendor
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css'; // Importa il CSS di AOS

// Inizializza AOS
AOS.init({
    duration: 1000, // Durata dell'animazione
    easing: 'ease-in-out', // Tipo di easing dell'animazione
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
