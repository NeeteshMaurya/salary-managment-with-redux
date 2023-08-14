import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee : [
        { id: "0", salary: 0 },
        { id: "1", salary: 0 },
        { id: "2", salary: 0 },
        { id: "3", salary: 0 },
      ]
    // salary: 10,   //name of state which we want to manage,----Previously- const[salary, setSalary]=useState(0)
}
//here initial can be anything like Above- Array Type-----
// or just like useState -like above commented line


export const salarySlice = createSlice({
    name: 'salarySlice',
    initialState,
    reducers: {
        incrementbyAmount: (state, action)=>{   //taking and using multiple parameter as an Array inside action
            for (let i = 0; i < action.payload[1].length; i++){
                const id = action.payload[1][i]
                state.employee[id].salary = parseInt(state.employee[id].salary) + parseInt(action.payload[0])
            }
            // state.salary +=parseInt(action.payload)
        }
    }
})

//export actions to use it in components
export const {incrementbyAmount} = salarySlice.actions

//export reducer to use it in store..
export default salarySlice.reducer
