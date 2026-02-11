import React from "react";

const ConfirmModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
      <p className="mb-4">Are you sure you want to delete this employee?</p>
      <div className="flex gap-4">
        <button 
          onClick={onConfirm} 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Yes, Delete
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;