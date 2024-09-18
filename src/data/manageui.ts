import { ManageUiState } from "../context/UiTypes";

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