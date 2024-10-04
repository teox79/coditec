import React from 'react';
import { Course } from '../../context/CourseTypes';
import CoursesSection from '../../components/Common/Courses';

interface UpcamingProps {
    courseList: Course[];
}

const Upcaming: React.FC<UpcamingProps> = ({ courseList }) => {


    return (
        <div>
            {courseList && (
                <>
                    <CoursesSection
                        courses={courseList}
                    />
                </>
            )}
        </div>
    );
}

export default Upcaming;