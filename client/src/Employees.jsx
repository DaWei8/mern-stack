import axios from "axios";
import { useEffect, useState } from "react";

export default function ListEmployees(){
  const [employees, setEmployees] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getEmployees")
      .then((response) => setEmployees(response.data))
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h2>This is the list of Employees</h2>
      <div className=" d-flex row" >
        {employees ? (
          employees.map((employee, index) => (
            <div className="bg-white p-3 rounded w-50" key={index}>
              <h5>{employee.name}</h5>

              <p>{employee.email}</p>
              <vr />
            </div>
          ))
        ) : (
          <div>No Employee has signed in</div>
        )}
      </div>
    </div>
  );
}