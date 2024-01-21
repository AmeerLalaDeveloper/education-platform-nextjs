import FeaturedCourses from "@/components/FeaturedCourses";
import SearchBar from "@/components/Searchbar";
import { getCoursesByQuery } from "@/lib/courses.actions";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const courses = searchParams?.query
    ? await getCoursesByQuery(searchParams.query)
    : null;
  return (
    <div className="flex-1 p-3 ">
      <SearchBar />
      <FeaturedCourses courses={courses} />
    </div>
  );
}
