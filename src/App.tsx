import { useState } from 'react'
import './App.css'
import Increment from './components/Increment'
import ReflectIncrement from './components/ReflectIncrement'
function App() {
  // const [newSalary, setNewSalary]= useState(0)   --------no need of this global function due to redux
  // const getNewSalary=(salary: number)=>{
  //   setNewSalary(salary)
  // }
  return (
    <div>
      <div style={{marginLeft:'580px'}}>
        <h2 >Salary Management System</h2>
      </div>
      <div className='appdiv'>
        <Increment/>
        <ReflectIncrement />
      </div>
    </div>
  );
}

export default App;
