import typia from 'typia';
import { ManageUiState } from '../../context/UiTypes';
import { testManageUiData } from '../../__mock__/manageui';

describe('ManageUiState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<ManageUiState>(testManageUiData)).toBe(true);
    });
});