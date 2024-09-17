import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';
import AppRoutes from './route/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <BrowserRouter basename="/coditec">
            <AppProvider>
                <Header />
                <AppRoutes />
                <Footer />
            </AppProvider>
        </BrowserRouter>
    );
}


export default App;
