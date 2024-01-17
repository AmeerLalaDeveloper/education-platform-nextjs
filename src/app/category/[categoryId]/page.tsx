import CourseCard from "@/components/CourseCard";
import { getCoursesByCategory } from "@/lib/courses.actions";
import React from "react";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  const courses = await getCoursesByCategory(+categoryId);
  return (
    <div
      className="grid grid-cols-3 gap-4 p-3
    m-5"
    >
      {courses.map((course) => (
        <CourseCard key={course.course_id} course={course} />
      ))}
    </div>
  );
};

export default Category;
