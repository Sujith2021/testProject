import React from "react";
import empList from "../constants/index";
import Employees from "../Employees";
import {
    tableRow,
    tableData,
    tableHeading,
    vl,
    label,
  } from "../constants/style";
  import {useState} from 'react';

function DepartmentDetails(props) {
  const [employee, setEmployee] = useState(null);

   const onEmployeeClick = (emp) => {
     ( setEmployee(emp));
    }
    
   const getEmployeeCount = (department) => {
        const count = empList.filter(item=> item.Department === department);
        return count.length;
    }
    return (
      <div style={vl}>
        <div style={{ padding: "4px 3px", margin: "13px 0px 0px 0px"}} >Department Name: {props.department}</div>
        
    <div style={label}> No. of Employees:  {getEmployeeCount(props.department)}</div>
        <div style={label}>Employeees List:</div>
  <table width="100%" style={{ padding: "15px 0px"}}>
     <tbody>
           <tr>
            <th style={tableHeading}>ID</th>

             <th style={tableHeading}>Full_Name</th>

          <th style={tableHeading}>Gender</th>

          <th style={tableHeading}>age</th>

            <th style={tableHeading}>Reporting_to</th>

           <th style={tableHeading}>Designation</th>
             </tr>

       {empList.map((emp) => {
            if (emp.Department == props.department) {
              return (
                <tr   
                style={
                    (employee && employee.id === emp.id)
                      ? { background: 'cadetblue' }
                      : { background: "skyblue" }
                  }
                  onClick={e => onEmployeeClick(emp)}
                  key={emp.id}
                >
                  <td style={tableData}>{emp.id}</td>
                  <td style={tableData}>{emp.Full_Name}</td>
                  <td style={tableData}>{emp.Gender}</td>
                  <td style={tableData}>{emp.age}</td>
                  <td style={tableData}>{emp.Reporting_to}</td>
                  <td style={tableData}>{emp.Designation}</td>
                </tr>
              );
            }
          })}
        </tbody>
        </table>
        {(employee && props.department  )?
         ((props.department=== employee.Department)?
         <Employees employee={employee} />  :  setEmployee(null)) : null  
        }
    </div>
    );
}

export default DepartmentDetails;
