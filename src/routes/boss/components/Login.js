import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

function Login() {
  const history = useHistory()
  const location = useLocation()

  const CustomButton = withStyles({
    root: {
      width: '100px',
      color: 'white',
      backgroundColor: '#124191',
      '&:hover': {
        backgroundColor: '#1a59c4',
      },
    },
  })(Button)

  const [authenticationFailed, setAuthenticationFailed] = useState(false)
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (event) => {
    event.persist()
    event.preventDefault()
    if (value === 'IAmTheBoss') {
      setAuthenticationFailed(false)
      window.sessionStorage.setItem('authenticated', 'true')
      history.replace(location.state?.from ?? '/')
    } else {
      setAuthenticationFailed(true)
    }
  }

  const handleChange = (prop) => (event) => {
    setValue(event.target.value)
  }
  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <div
      style={{ paddingTop: '30vh', display: 'flex', flexDirection: 'column', margin: '0 auto', width: 'fit-content' }}
    >
      <form onSubmit={onSubmit}>
        <InputLabel htmlFor="boss-password">Please enter your password</InputLabel>
        <Input
          error={authenticationFailed ? true : false}
          style={{ width: '300px' }}
          id="password-field"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {authenticationFailed && <div style={{ color: '#F44336' }}>Incorrect Password</div>}
      </form>
      <CustomButton style={{ marginTop: '20px' }} type="submit" onClick={onSubmit}>
        Submit
      </CustomButton>
    </div>
  )
}

export default Login
