import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-56 min-h-screen bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/employees" className="hover:text-blue-400">
            Employees
          </Link>
        </li>
        <li>
          <Link to="/add-employee" className="hover:text-blue-400">
            Add Employee
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;