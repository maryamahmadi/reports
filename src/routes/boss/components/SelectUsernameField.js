import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const SelectUsernameField = ({ handleUsernameChange, username }) => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <InputLabel style={{ paddingBottom: '5px' }} id="username-label">
        Select Employee
      </InputLabel>
      <Select
        labelId="username-select-field"
        id="username-select-field"
        value={username}
        onChange={handleUsernameChange}
      >
        <MenuItem value={'randomEmployee*****'}>Please select an employee</MenuItem>
        <MenuItem value={'ahmad'}>Ahmad</MenuItem>
        <MenuItem value={'alanI'}>Alan I</MenuItem>
        <MenuItem value={'allanC'}>Allan C</MenuItem>
        <MenuItem value={'chris'}>Chris</MenuItem>
        <MenuItem value={'gloria'}>Gloria</MenuItem>
        <MenuItem value={'jaspreet'}>Jaspreet</MenuItem>
        <MenuItem value={'kevin'}>Kevin</MenuItem>
        <MenuItem value={'maryam'}>Maryam</MenuItem>
        <MenuItem value={'matt'}>Matt</MenuItem>
        <MenuItem value={'mayuran'}>Mayuran</MenuItem>
        <MenuItem value={'paul'}>Paul</MenuItem>
        <MenuItem value={'rohit'}>Rohit</MenuItem>
        <MenuItem value={'saad'}>Saad</MenuItem>
        <MenuItem value={'shahram'}>Shahram</MenuItem>
        <MenuItem value={'tao'}>Tao</MenuItem>
        <MenuItem value={'ukeme'}>Ukeme</MenuItem>
      </Select>
    </div>
  )
}
export default SelectUsernameField
