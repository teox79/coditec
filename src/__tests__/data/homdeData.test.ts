
import typia from 'typia';
import { HomeState } from '../../context/HomeType';
import { homeData } from '../../data/home';


describe('HomeState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<HomeState>(homeData)).toBe(true);
    });
});