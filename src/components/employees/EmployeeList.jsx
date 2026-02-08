import React, { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeServices";  // ✅ lowercase 'services'
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;