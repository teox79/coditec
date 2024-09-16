
import typia from 'typia';
import { ContactState } from '../../context/Contact';
import { contactData } from '../../data/contact';


describe('ContactState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<ContactState>(contactData)).toBe(true);
    });
});