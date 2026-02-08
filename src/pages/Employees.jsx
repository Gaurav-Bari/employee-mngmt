import React from "react";
import EmployeeList from "../components/employees/EmployeeList";

const Employees = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <EmployeeList />
    </div>
  );
};

export default Employees;