"use server";
import { prisma } from "./prisma";

export const getCategories = async () => {
  const res = await prisma.category.findMany({});
  return res;
};
export const getTop3CoursesPerCategory = async () => {
  const categories = await prisma.category.findMany({
    include: {
      courses: {
        take: 3, // Limit to 3 courses per category
        orderBy: { course_id: "asc" }, // Adjust the sorting as needed
      },
    },
  });

  // Calculate the total number of courses for each category
  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => {
      const totalCourseCount = await prisma.course.count({
        where: { category_id: category.category_id },
      });

      return {
        ...category,
        totalCourseCount,
      };
    })
  );

  return categoriesWithCounts;
};
