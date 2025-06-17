import { BsCalendar2DateFill } from "react-icons/bs";

export const ProjectCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {data && data.length > 0 ? (
        data.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 hover:bg-gray-700 shadow-md rounded-lg p-5 m-2"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span
                className={`inline-block px-3 py-1 mt-2 text-sm font-semibold rounded-full ${
                  project.status === "In Progress"
                    ? "bg-yellow-500 text-white"
                    : project.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {project.status}
              </span>
              <span className="text-sm">{project.percent}% Completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-5">
                <div
                    className={`bg-blue-500 h-2.5 rounded-full`}
                    style={{ width: `${project.percent}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 flex gap-2 mt-4 items-center justify-start">
              <BsCalendar2DateFill /> {project.dueDate}
            </p>
          </div>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};
