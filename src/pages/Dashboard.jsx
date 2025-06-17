import { Cards } from "../components/Cards";
import { GoProjectSymlink } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { BsMicrosoftTeams, BsBellFill } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { dataLine, dataBar } from "../assets/chartData";
import { Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,} from "chart.js";

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,BarElement,);

export const Dashboard = () => {
  const activity = [
    {
      id: 1,
      type: "Project Created",
      description: "New project 'AI Research' created.",
      date: "2025-06-11",
    },
    {
      id: 2,
      type: "Task Assigned",
      description: "Task 'Design UI' assigned to John Doe.",
      date: "2025-06-10",
    },
    {
      id: 3,
      type: "Project Created",
      description: "New project 'AI Research' created.",
      date: "2025-06-11",
    },
    {
      id: 4,
      type: "Task Assigned",
      description: "Task 'Design UI' assigned to John Doe.",
      date: "2025-06-10",
    },
  ];

  return (
    <div className="m-4 h-screen overflow-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-sm md:text-base">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="ring-1 ring-gray-600 rounded-xl px-3 py-2 w-full md:w-auto"
          />
          <button className="bg-blue-500 text-white font-bold flex justify-center items-center gap-2 px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-300">
            <span className="text-2xl -mt-1 font-extrabold">+</span>
            <span className="text-lg">New Project</span>
          </button>

          <button className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition duration-300 text-xl">
            <BsBellFill />
          </button>
          <button className="bg-gray-300 w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"></button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-auto">
        <Cards title="Total Projects" value="10" icon={<GoProjectSymlink />} />
        <Cards title="Active Teams" value="45" icon={<FaTasks />} />
        <Cards title="Team Members" value="56" icon={<BsMicrosoftTeams />} />
        <Cards
          title="Recent Activity"
          data={activity}
          icon={<RxActivityLog />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mx-5 ">
        <div className="h-60 w-full mt-6 mb-4">
          <h3>Project Done</h3>
          <Line
            data={dataLine}
          />
        </div>
        <div className="h-60 w-full mt-6 mb-4">
          <h3>Tasks Completed</h3>
          <Bar
            data={dataBar}
          />
        </div>
      </div>
    </div>
  );
};
