import React from "react";
import { FaFilter } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "AI Research",
      description: "Exploring the latest advancements in AI technology.",
      status: "In Progress",
      percent: 75,
      dueDate: "2025-06-30",
    },
    {
      id: 2,
      name: "Web Development",
      description: "Building a responsive and user-friendly website.",
      status: "Completed",
        percent: 100,
      dueDate: "2025-07-15",
    },
    {
      id: 3,
      name: "Mobile App",
      description: "Developing a cross-platform mobile application.",
        status: "In Progress",
        percent: 50,
      dueDate: "2025-08-01",
    },
    {
      id: 4,
      name: "Database Migration",
      description: "Developing a cross-platform IOS mobile application.",
        status: "Planned",
        percent: 0,
      dueDate: "2025-09-01",
    },
    {
      id: 5,
      name: "E-commerce Platform",
      description: "Developing a cross-platform mobile application.",
        status: "In Progress",
        percent: 50,
      dueDate: "2025-08-01",
    },
    {
      id: 6,
      name: "API Integration",
      description: "Developing a cross-platform IOS mobile application.",
      status: "Planned",
        percent: 0,
      dueDate: "2025-09-01",
    },
  ];

  return (
    <div className="m-4 h-screen overflow-auto">
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-4 ml-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold ">Projects</h1>
            <p className="text-sm md:text-base">
              Here's what's happening with your projects—stay on top of your
              tasks and progress!
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-5">
              <input
                type="text"
                placeholder="Search"
                className="ring-1 ring-gray-600 rounded-xl px-3 py-2 w-full md:w-auto "
              />
              <button className="bg-blue-500 text-white font-bold flex justify-center items-center gap-2 px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-300">
                <FaFilter />
                <span>Filter</span>
              </button>
            </div>
          </div>
          <button className="bg-blue-500 text-white m-10 font-bold flex justify-center items-center gap-2 px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-300">
            <span className="text-2xl -mt-1 font-extrabold">+</span>
            <span className="text-lg">New Project</span>
          </button>
        </div>
      </div>

      <div className="">
        <ProjectCard data={projects} />
      </div>
    </div>
  );
};
