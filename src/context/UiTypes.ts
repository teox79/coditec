export enum Alignment {
    Left = "left",
    Right = "right",
    Center = "center"
}

export interface ManageUiState {
    aboutUi?: AboutUi;
    contactUi?: ContactUi;
    courseUi?: CourseUi;
    eventsUi?: EventsUi;
    footerUi?: FooterUi;
    galleryUi?: GalleryUi;
    homeUi?: HomeUi;
    trainersUi?: TrainersUi;
    HeaderUi?: HeaderUi;
}

export interface AboutUi {
}

export interface ContactUi {
}

export interface CourseUi {
}

export interface EventsUi {
}

export interface FooterUi {
}

export interface GalleryUi {
}

export interface HomeUi {
}

export interface TrainersUi {
}

export interface HeaderUi {
    showGoogleTranslatorWidget?: boolean
}

