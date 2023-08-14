import { useSelector } from 'react-redux'


const ReflectIncrement = () => {
  const salaryy= useSelector((state)=> state.salary.employee)    //state.reducernameDefined in store . state name in slice
  console.log(salaryy)
  return (
    <div style={{height:'400px',width:'300px',border:'1px solid black',justifyContent:'center',display:'flex'}}>
      <div style={{}}>
        <h1>Salary</h1>
        <div style={{display:'flex'}}>
          <h2>Employee 1 Salary-- </h2> 
          <h2>{salaryy[0].salary}</h2>
        </div>
        <div style={{display:'flex'}}>
          <h2>Employee 2 Salary-- </h2> 
          <h2>{salaryy[1].salary}</h2>
        </div>
        <div style={{display:'flex'}}>
          <h2>Employee 3 Salary-- </h2> 
          <h2>{salaryy[2].salary}</h2>
        </div>
        <div style={{display:'flex'}}>
          <h2>Employee 4 Salary-- </h2> 
          <h2>{salaryy[3].salary}</h2>
        </div>
      </div>
    </div>
  )
}

export default ReflectIncrement