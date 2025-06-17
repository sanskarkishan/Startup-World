import "./App.css";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./pages/Dashboard";
import { Projects } from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex dark:bg-gray-900 dark:text-gray-100 h-screen">
        <SideBar />
        {/* ✅ Proper Routing */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
