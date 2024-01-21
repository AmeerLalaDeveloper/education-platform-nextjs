"use client";
import React from "react";

const ManageCourses = () => {
  const courses = [];
  return (
    <section className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Manage Courses</h2>
      <ul>
        {courses.map((course) => {
          return (
            <li
              key={course.course_id}
              className="flex items-center justify-between mb-2"
            >
              <p className="text-gray-700">{course.title}</p>
              <div className="space-x-2">
                {/* Edit button */}
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                {/* Delete button */}
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="bg-green-500 text-white px-2 py-1 mt-4 rounded">
        Add New Course
      </button>
    </section>
  );
};

export default ManageCourses;
