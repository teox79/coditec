export enum Alignment {
    Left = "left",
    Right = "right",
    Center = "center"
}

export interface ManageUiState {
    globalUi: GlobalUi;
    aboutUi?: AboutUi;
    contactUi?: ContactUi;
    courseUi?: CourseUi;
    eventsUi?: EventsUi;
    footerUi?: FooterUi;
    galleryUi?: GalleryUi;
    homeUi?: HomeUi;
    trainersUi?: TrainersUi;
    headerUi?: HeaderUi;
}

export interface GlobalUi {
    baseUrl: string;
}

export interface AboutUi {
}

export interface ContactUi {
}

export interface CourseUi {
    filters: {
        showPrice: boolean,
        showCaregory: boolean,
        showYear: boolean,
    }
}

export interface EventsUi {
}

export interface FooterUi {
}

export interface GalleryUi {
}

export interface HomeUi {
    showTrainersSection: boolean
}

export interface TrainersUi {
}

export interface HeaderUi {
    showGoogleTranslatorWidget?: boolean
}

