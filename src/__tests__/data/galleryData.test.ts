import typia from 'typia';
import { GalleryState } from '../../context/GalleryTypes';
import { galleryData } from '../../data/gallery';

describe('GalleryState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<GalleryState>(galleryData)).toBe(true);
    });
});