/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@mui/material'
import { useState } from 'react'
// import { useGetEmployee, useUpdateSalary } from '../hooks' ---------//no need of hook,we used Redux here
import { useSelector, useDispatch } from 'react-redux'
import { incrementbyAmount } from '../redux/salarySlice'
import Tooltip from '@mui/material/Tooltip'

const Increment = () => {
  const dispatch = useDispatch()
  // const employee = useGetEmployee()    -------------------------- //no need of hook,we used Redux here
  const employee = useSelector((state) => state.salary.employee)
  const [checked, setChecked] = useState([])

  const handleCheckAllChange = (e) => {
    setChecked(e.target.checked ? employee.map((c) => c.id) : [])
  }
  const [input, setInput] = useState(0)

  const handleCountryChange = (e, c) => {
    setChecked((prevChecked) =>
      e.target.checked
        ? [...prevChecked, c.id]
        : prevChecked.filter((item) => item !== c.id)
    )
  }

  return (
    <div
      className="container"
      style={{ height: '400px', width: '300px', border: '1px solid black' }}
    >
      <h3 style={{ marginLeft: '35px' }}>Salary Increment Register</h3>
      <div style={{ marginLeft: '15px' }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="selectAll"
          checked={checked.length === employee.length}
          onChange={handleCheckAllChange}
        />
        <label className="form-check-label" htmlFor="selectAll">
          Select all
        </label>
      </div>
      {employee.map((c) => (
        <div
          className="form-check form-check-inline"
          style={{ display: 'flex', marginLeft: '15px' }}
          key={c.id}
        >
          <p>Increase Salary of Employee {c.id} </p>
          <input
            className="form-check-input"
            type="checkbox"
            id={c.id}
            checked={checked.includes(c.id)}
            onChange={(e) => handleCountryChange(e, c)}
          />
        </div>
      ))}
      <div className="incAmount">
        <p>Increment Amount -</p>
        <input
          style={{ marginRight: '8px' }}
          type="number"
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <Tooltip title="Increase Salary">
          <Button
            sx={{
              bgcolor: 'orange',
              color: 'black',
              '&:hover': { backgroundColor: 'transparent' },
            }}
            onClick={() => dispatch(incrementbyAmount([input, checked]))}
          >
            Increase
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default Increment
