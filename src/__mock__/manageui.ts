import { ManageUiState } from "../context/UiTypes";

export const testManageUiData: ManageUiState = {
    globalUi: {
        baseUrl: '',
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
};