import { Course } from "@prisma/client";
import Image from "next/image";
import React from "react";
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div
      key={course.course_id}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <Image
        src={course.image_url}
        alt={course.title}
        className="w-full h-48 object-cover"
        height={50}
        width={50}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600">{course.description}</p>
        <a
          href={`/courses/${course.course_id}`}
          className="mt-4 block text-blue-500 hover:text-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
