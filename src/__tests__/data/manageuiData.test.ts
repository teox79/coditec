import typia from 'typia';
import { ManageUiState } from '../../context/UiTypes';
import { manageUiData } from '../../data/manageui';

describe('ManageUiState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<ManageUiState>(manageUiData)).toBe(true);
    });
});