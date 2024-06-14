import { useState, useEffect } from "react";
import type { Course } from "../types/Course";
import CourseCard from "../components/CourseCard.tsx";


const Schedule = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        fetchCoursesData();
    }, []);
    
    const fetchCoursesData = async () => {
        try {
            const orgId = import.meta.env.PUBLIC_ORG_ID;
            const response = await fetch(`https://corazon.dance/orion/organizations/${orgId}/courses`);
            if (!response.ok) {
              throw new Error('Failed to fetch courses data: ' + response.statusText);
            }
            const result = await response.json();
            setCourses(result.data);
          } catch (error:any) {
                setError(error.message);
                console.error('Error fetching courses data:', error);
          } finally {
            setLoading(false);
          }
    };

    if (loading) return <p className="container mx-auto text-center my-10 py-10 text-gray-600 border border-dashed">Loading...</p>;
    if (error) return <p className="container mx-auto text-center my-10 py-10 text-red-600 font-medium border border-dashed">{error}</p>;

    return (
        <section className="body-font">
            <div className="max-w-7xl mx-auto py-10 px-5">

                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Schedule</h2>
                    <p className="mt-1 text-gray-500">Explore our schedule packed with classes for all levels and interests.</p>
                </div>
 
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4">
                    {courses.map((course, index) => (
                        <CourseCard course={course} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;