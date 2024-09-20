import { ManageUiState } from "../context/UiTypes";

// ATTENZIONE QUANDO MODIFICATE QUESTO FILE MODIFICATE ANCHE IL CORRISPETTIVO 
// FILE MOCK SOTTO LA CARTELLA __mock__
export const manageUiData: ManageUiState = {
    globalUi: {
        baseUrl: import.meta.env.VITE_PUBLIC_URL ? import.meta.env.VITE_PUBLIC_URL : '',
    },
    headerUi: {
        showGoogleTranslatorWidget: false,
    },
    courseUi: {
        filters: {
            showPrice: false,
            showCaregory: true,
            showYear: true,
        }
    }
}