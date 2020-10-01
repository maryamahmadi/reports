import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import useUsers from '../../../components/useUsers'

const SelectUsernameField = ({ handleUsernameChange, selectedUser, hint, helperText }) => {
  const users = useUsers()

  return (
    <div style={{ paddingBottom: '20px' }}>
      <InputLabel id="username-label" style={{ marginBottom: '4px' }}>
        {hint}
      </InputLabel>
      <Select
        style={{ width: '200px' }}
        labelId="username-select-field"
        id="username-select-field"
        value={selectedUser}
        onChange={handleUsernameChange}
      >
        {users.map((user) => (
          <MenuItem key={user.userId} value={user.userId}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>This field is required.</FormHelperText>
    </div>
  )
}
export default SelectUsernameField
