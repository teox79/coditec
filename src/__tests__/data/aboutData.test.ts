// aboutState.test.ts
import typia from 'typia';
import { AboutState } from '../../context/AboutTypes';
import { aboutData } from '../../data/about';

describe('AboutState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<AboutState>(aboutData)).toBe(true);
    });
});
