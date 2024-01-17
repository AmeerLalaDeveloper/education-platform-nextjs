import CourseCard from "@/components/CourseCard";
import { getTop3CoursesPerCategory } from "@/lib/category.actions";
import Link from "next/link";

const CoursesPage = async () => {
  const categories = await getTop3CoursesPerCategory();
  console.log("====================================");
  console.log(categories);
  console.log("====================================");
  return (
    <div className="container mx-auto mt-8">
      {categories.map((category) => (
        <div key={category.category_id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            {category.courses.map((course) => (
              <CourseCard key={course.course_id} course={course} />
            ))}
          </div>
          {category.totalCourseCount > 3 && (
            <div className="mt-4">
              <Link
                href={`/category/${category.category_id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Show More
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
