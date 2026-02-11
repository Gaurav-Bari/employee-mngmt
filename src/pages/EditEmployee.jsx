import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams(); // get employee ID from URL
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    status: "Active",
  });

  // Fetch employee by ID
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/employees/${id}`, employee);
      navigate("/employees"); // redirect after update
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="status"
          value={employee.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;