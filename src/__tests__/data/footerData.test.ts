import typia from 'typia';
import { FooterState } from '../../context/Type';
import { footerData } from '../../data/footer';

describe('FooterState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<FooterState>(footerData)).toBe(true);
    });
});