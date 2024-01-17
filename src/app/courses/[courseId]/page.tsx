import { getCourseById, getFeaturedCourses } from "@/lib/courses.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await getFeaturedCourses();
  return res.map((course) => ({
    courseId: course.course_id.toString(),
  }));
}

const CourseDetails: React.FC<{ params: { courseId: string } }> = async ({
  params,
}) => {
  const { courseId } = params;
  const course = await getCourseById(+courseId);
  if (!course) notFound();
  return (
    <div className="container mx-auto mt-8 flex-1">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <Image
          src={course.image_url}
          alt={course.title}
          className="w-full h-64 object-cover"
          height={50}
          width={50}
        />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-semibold mb-2">{course.title}</h1>
          <p className="text-gray-600">Instructor: {course.instructor_id}</p>
          <p className="text-gray-800 text-base mt-4">{course.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Course Lessons</h2>
        <ul className="space-y-4">
          {course?.lessons?.map((lesson) => (
            <li key={lesson.lesson_id} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <p className="text-gray-800">{lesson.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
