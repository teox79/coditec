import React, { createContext, useContext, useState } from 'react';
import { AppContextType, AppState } from './Type';
import { homeData } from '../data/home'
import { footerData } from '../data/footer'
import { aboutData } from '../data/about'
import { courseData } from '../data/course'
import { trainerData } from '../data/trainers';
import { eventData } from '../data/events';
import { galleryData } from '../data/gallery';
import { contactData } from '../data/contact';
import { manageUiData } from '../data/manageui';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state] = useState<AppState>({
        home: { ...homeData },
        footer: { ...footerData },
        about: { ...aboutData },
        course: { ...courseData },
        trainer: { ...trainerData },
        event: { ...eventData },
        gallery: { ...galleryData },
        contact: { ...contactData },
        ui: { ...manageUiData }
    });

    /*const updateState = (newState: Partial<AppState>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };*/

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook per usare il contesto
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
