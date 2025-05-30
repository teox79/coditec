import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';
import AppRoutes from './route/AppRoutes';
import { HashRouter } from 'react-router-dom';
import ErrorBoundary from './components/Common/ErrorBoundary';

const App: React.FC = () => {

    return (
        <ErrorBoundary>
            <HashRouter>
                <AppProvider >
                    <Header />
                    <AppRoutes />
                    <Footer />
                </AppProvider >
            </HashRouter >
        </ErrorBoundary>
    );
}


export default App;
