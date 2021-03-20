import React from "react";
import Employees from "./Employees/index"
import {
  tableStyle,
  moduleSection,
  width,
  tableRow,
  tableData,
  tableHeading,
  widthless,
  vl,
} from "./constants/style";
import { render } from '@testing-library/react';
import Departments from "./Departments";
import DepartmentDetails from "./Departments/DepartmentDetails";
import {useState} from 'react'; 

  function App(props) {

  const [department, setDepartment] = useState("HR");
 
const onDepartmentChange = (item) =>
{
  if(item !== department)
  {
    setDepartment(item);
  }
};
    return(
        <div style={{display: "flex", height: "100%"}}>
          <Departments onDepartmentChange={onDepartmentChange} depatmnt ={department} />
          <DepartmentDetails department={department}/>
        </div>
    );
}

export default App;
