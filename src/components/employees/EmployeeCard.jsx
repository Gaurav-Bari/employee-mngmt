import React from "react";
import axios from "axios";

const EmployeeCard = ({ employee, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/employees/${employee.id}`);
      onDelete(employee.id); // notify parent to refresh list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{employee.name}</h2>
      <p>{employee.role} - {employee.department}</p>
      <p>{employee.email}</p>
      <p>Status: {employee.status}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;