import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{employee.name}</h2>
      <p>{employee.role} - {employee.department}</p>
      <p>{employee.email}</p>
      <p>Status: {employee.status}</p>
    </div>
  );
};

export default EmployeeCard;