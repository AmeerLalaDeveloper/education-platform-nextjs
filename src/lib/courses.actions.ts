"use server";

import { prisma } from "./prisma";

export const getFeaturedCourses = async () => {
  const res = await prisma.course.findMany({ take: 5 });

  return res;
};

export const getCourseById = async (id: number) => {
  const res = await prisma.course.findUnique({
    where: { course_id: id },
    include: {
      lessons: true,
    },
  });
  return res;
};

export const getCoursesByCategory = async (id) => {
  const courses = await prisma.course.findMany({
    where: {
      category: {
        category_id: id,
      },
    },
  });

  return courses;
};

export const getCoursesByQuery = async (searchQuery) => {
  const courses = await prisma.course.findMany({
    where: {
      OR: [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ],
    },
  });
  return courses;
};

export const getCoursesByInstructorId = async (instructorId: number) => {
  const courses = await prisma.course.findMany({
    where: {
      instructor_id: instructorId,
    },
  });

  return courses;
};
