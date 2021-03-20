import React, { Component } from "react";
import { tableRow, tableData, tableHeading } from "../constants/style";
import empList from "./index";
import reportWebVitals from "../reportWebVitals";
import {label} from "../constants/style"

function Employees(props) {
    const { employee } = props;

    return (

      <div style={{background: "cadetblue" , width: "29%", margin: "33px 328px",padding: "7px",
      border: "2px solid black"}}>
    <div className={label}> Employee Id :
    <label style={{padding: "4px 3px", margin: "0px 31px"}}> : {employee.id}</label> </div>

        <div style={label}> Employee Name :
        <label  style={{padding: "4px 3px", margin: "0px 2px"}}> : {employee.Full_Name}</label> </div>

        <div style={label}>age :
        <label style={{padding: "4px 3px", margin: "0px 98px"}}>: {employee.age}</label></div>

        <div style={label}>Current Project:
        <label  style={{padding: "4px 3px", margin: "0px 19px"}}>: {employee.Curent_Project}</label></div>

        <div style={label}>Designation :
        <label style={{padding: "4px 3px", margin: "0px 41px"}}>: {employee.Designation}</label> </div>

        <div style={label}>Reporting to :
        <label style={{padding: "4px 3px", margin: "0px 38px"}}>: {employee.Reporting_to}</label></div>
      </div>
    );
}
export default Employees;
