import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import { sortUsers } from 'utils'

const SelectUsernameField = ({ handleUsernameChange, selectedUser, hint, helperText }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch(`/api/users`)
        const result = await resp.json()
        let userMap = []
        result.data.forEach((user) => userMap.push({ userId: user.id, name: user.name }))
        setUsers(sortUsers(userMap))
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [])

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
