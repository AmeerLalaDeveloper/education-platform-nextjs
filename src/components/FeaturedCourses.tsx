import React from "react";
import CourseCard from "./CourseCard";
import { Course } from "@prisma/client";
import { getFeaturedCourses } from "@/lib/courses.actions";

const FeaturedCourses = async ({ courses }: { courses: Course[] | null }) => {
  const featuredCourses: Course[] = courses || (await getFeaturedCourses());

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {featuredCourses.map((course) => (
        <CourseCard key={course.course_id} course={course} />
      ))}
    </div>
  );
};

export default FeaturedCourses;
