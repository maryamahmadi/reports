import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import emailjs from 'emailjs-com'

function Reminder({ employees }) {
  const CustomButton = withStyles({
    root: {
      width: '150px',
      color: 'white',
      backgroundColor: '#124191',
      '&:hover': {
        backgroundColor: '#1a59c4',
      },
    },
  })(Button)

  const CustomMuiAlert = withStyles({
    root: {
      color: 'white',
      backgroundColor: '#124191',
    },
  })(MuiAlert)

  function CustomAlert(props) {
    return <CustomMuiAlert elevation={6} variant="filled" {...props} />
  }

  const [showSnackbar, setShowSnackbar] = useState(false)
  const onButtonClick = async (event) => {
    employees.forEach((emp, i) => {
      const params = { name: emp.name, toEmail: emp.email, date: new Date().toLocaleString }
      // EmailJS only lets us send one email per second
      setTimeout(() => {
        emailjs.send('service_c7v8imf', 'template_r85qbsr', params).then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text)
          },
          function (error) {
            console.log('FAILED...', error)
          }
        )
      }, i * 1500)
      setShowSnackbar(true)
    })
  }
  const onSnackbarClose = () => {
    setShowSnackbar(false)
  }
  return (
    <React.Fragment>
      <Paper style={{ marginTop: '20px' }}>
        <div style={{ padding: '10px 10px' }}>
          The following employees have not submitted a report in the past 7 days:
          <ol>
            {employees.map((employee) => {
              return <li key={employee.userId}>{employee.name}</li>
            })}
          </ol>
          <CustomButton onClick={onButtonClick}>Send Reminder</CustomButton>
        </div>
      </Paper>
      <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={onSnackbarClose}>
        <CustomAlert onClose={onSnackbarClose} severity="success">
          Reminders Sent.
        </CustomAlert>
      </Snackbar>
    </React.Fragment>
  )
}

export default Reminder
