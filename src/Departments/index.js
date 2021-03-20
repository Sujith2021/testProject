import React from "react";
import Employees from "../Employees";
import { selectedBtn, nonSelectedBtn } from "../constants/style";

function Departments(props) {
    return (
      <div style={{background:"darkkhaki", margin : "10px"}}>
        <button style={ (props.depatmnt === "HR") ? selectedBtn : nonSelectedBtn }
        onClick={() => props.onDepartmentChange("HR")}>
          HR
        </button>
        <button
          style={ (props.depatmnt === "Technical") ? selectedBtn : nonSelectedBtn } 
          onClick={() => props.onDepartmentChange("Technical")}
        >
          Technical
        </button>
        <button style={ (props.depatmnt === "BD") ? selectedBtn : nonSelectedBtn } 
         onClick={() => props.onDepartmentChange("BD")}>
          BD
        </button>
        <button
         style={ (props.depatmnt === "Testing") ? selectedBtn: nonSelectedBtn } 
          onClick={() => props.onDepartmentChange("Testing")}
        >
          Testing
        </button>
      </div>
    );
}

export default Departments;