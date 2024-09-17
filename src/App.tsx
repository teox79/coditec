import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';
import AppRoutes from './route/AppRoutes';
import { HashRouter } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <HashRouter>
            <AppProvider >
                <Header />
                <AppRoutes />
                <Footer />
            </AppProvider >
        </HashRouter >
    );
}


export default App;
