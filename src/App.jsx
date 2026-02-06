import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
  <BrowserRouter>
    <Navbar /> 
    
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </div> {/* This closes the "flex" div */}
    
    <Footer />
  </BrowserRouter>
);
}

export default App;