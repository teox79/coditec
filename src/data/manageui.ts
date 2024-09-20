import { ManageUiState } from "../context/UiTypes";

// ATTENZIONE QUANDO MODIFICATE QUESTO FILE MODIFICATE ANCHE IL CORRISPETTIVO 
// FILE MOCK SOTTO LA CARTELLA __mock__
export const manageUiData: ManageUiState = {
    globalUi: {
        baseUrl: `${window.location.pathname}`,
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