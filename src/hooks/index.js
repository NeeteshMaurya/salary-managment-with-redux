
import { useState } from "react";

const employee = [
    { id: "0", salary: 0 },
    { id: "1", salary: 0 },
    { id: "2", salary: 0 },
    { id: "3", salary: 0 },
  ];


export function useGetEmployee(){
    return employee
}



export function useUpdateSalary(checked, input,newSalary){
    const salary = newSalary + parseInt(input)
    console.log(employee)
    for (let i = 0; i < checked.length; i++){
        const id = checked[i]
        employee[id].salary = parseInt(employee[id].salary) + parseInt(input)
    }
    return salary
}