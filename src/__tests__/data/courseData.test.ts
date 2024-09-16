
import typia from 'typia';
import { CourseState } from '../../context/CourseTypes';
import { courseData } from '../../data/course';



describe('CourseState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<CourseState>(courseData)).toBe(true);
    });
});