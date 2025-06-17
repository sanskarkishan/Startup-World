import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Use React Router
import { MdSpaceDashboard, MdOutlineSettingsSuggest } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { FaTasks, FaCalendarDay } from "react-icons/fa";
import { BsMicrosoftTeams, BsBellFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";

export const SideBar = () => {
  const location = useLocation(); // ✅ Get current route for active styling

  return (
    <div className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 h-full w-20 md:w-60">
      <h1 className="text-2xl font-bold hidden md:block px-4 pt-5">
        Project Hub
      </h1>
      <ul className="flex flex-col gap-2 mt-5 text-lg font-semibold">
        <Link to="/dashboard">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/dashboard" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <MdSpaceDashboard />
            <span className="hidden md:inline">Dashboard</span>
          </li>
        </Link>
        <Link to="/project">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/project" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <GoProjectSymlink/>
            <span className="hidden md:inline">Projects</span>
          </li>
        </Link>
        <Link to="/tasks">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/tasks" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <FaTasks />
            <span className="hidden md:inline">Tasks</span>
          </li>
        </Link>
        <Link to="/teams">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/teams" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <BsMicrosoftTeams />
            <span className="hidden md:inline">Teams</span>
          </li>
        </Link>
        <Link to="/calendar">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/calendar" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <FaCalendarDay />
            <span className="hidden md:inline">Calendar</span>
          </li>
        </Link>
        <Link to="/reports">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/reports" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <BiSolidReport />
            <span className="hidden md:inline">Reports</span>
          </li>
        </Link>
        <Link to="/notifications">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/notifications" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <BsBellFill />
            <span className="hidden md:inline">Notifications</span>
          </li>
        </Link>
        <Link to="/settings">
          <li className={`flex items-center px-8 p-2 space-x-2 rounded-3xl gap-3 
            ${location.pathname === "/settings" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}>
            <MdOutlineSettingsSuggest />
            <span className="hidden md:inline">Settings</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
