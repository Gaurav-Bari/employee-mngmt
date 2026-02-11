import React, { useState } from "react";
import axios from "axios";
import ConfirmModal from "../common/ConfirmModal";

const EmployeeCard = ({ employee, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/employees/${employee.id}`);
      onDelete(employee.id); // update list
      setShowModal(false);   // close modal
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
          onClick={() => setShowModal(true)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>

      {showModal && (
        <ConfirmModal
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default EmployeeCard;