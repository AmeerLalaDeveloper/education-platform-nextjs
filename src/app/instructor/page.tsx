import ManageCourses from "@/components/ManageCourses";

const InstructorDashboard = () => {
  return (
    <div>
      {/* Navigation Header */}
      <header className="bg-white p-4 shadow-md">
        {/* Include your navigation links or elements here */}
      </header>

      {/* Dashboard Overview */}
      <section className="bg-white p-4 mb-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Dashboard Overview</h2>
        <div className="mb-4">
          <p className="text-gray-600 mb-1">Courses: X</p>
          <p className="text-gray-600 mb-1">Enrollments: X</p>
          <p className="text-gray-600">Earnings: $X</p>
        </div>
      </section>

      {/* Manage Courses */}
      <ManageCourses />
      {/* Edit Course Details */}
      <section className="bg-white p-4 mb-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Edit Course Details</h2>
        <form>
          {/* Course title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          {/* Course description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Course Description
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded px-2 py-1"
            ></textarea>
          </div>
          {/* Save button */}
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Save Changes
          </button>
        </form>
      </section>

      {/* Add Lessons */}
      <section className="bg-white p-4 mb-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Add Lessons</h2>
        <form>
          {/* Lesson title */}
          <div className="mb-4">
            <label htmlFor="lessonTitle" className="block text-gray-700">
              Lesson Title
            </label>
            <input
              type="text"
              id="lessonTitle"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          {/* Lesson/module description */}
          <div className="mb-4">
            <label htmlFor="lessonDescription" className="block text-gray-700">
              Lesson Description
            </label>
            <textarea
              id="lessonDescription"
              className="w-full border border-gray-300 rounded px-2 py-1"
            ></textarea>
          </div>
          {/* Add lesson button */}
          <button className="bg-green-500 text-white px-2 py-1 rounded">
            Add Lesson
          </button>
        </form>
      </section>
    </div>
  );
};

export default InstructorDashboard;
