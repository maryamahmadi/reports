import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Created from './Created'
import SelectUsernameField from '../../boss/components/SelectUsernameField'
import emailjs from 'emailjs-com'
import useUsers from '../../../components/useUsers'
import { Z_BLOCK } from 'zlib'

function NewReportForm() {
  const CustomButton = withStyles({
    root: {
      display: 'block',
      width: '100px',
      color: 'white',
      backgroundColor: '#124191',
      '&:hover': {
        backgroundColor: '#1a59c4',
      },
    },
  })(Button)
  const users = useUsers()
  const [created, setCreated] = useState(false)
  useEffect(() => setCreated(false), [])

  const onSubmit = async (event) => {
    event.persist()
    event.preventDefault()
    try {
      const resp = await fetch('/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          thisWeek,
          nextWeek,
          comments: comments,
        }),
      })
      const result = await resp.json()
      if (!resp.ok) {
        // setError(
        //   'description',
        //   'error',
        //   result.message || 'Internal Server Error'
        // )
        return
      } else {
        // send an email to employee with a copy of their submitted report
        const currentUser = users && users.find((user) => user.userId === result.data.userId)
        const params = {
          name: currentUser?.name,
          toEmail: currentUser?.email,
          date: result.data.createdAt,
          comments: result.data.comments,
          thisWeek: result.data.thisWeek,
          nextWeek: result.data.nextWeek,
        }
        emailjs.send('service_c7v8imf', 'template_5tjok1m', params).then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text)
          },
          function (error) {
            console.log('FAILED...', error)
          }
        )
        setCreated(true)
      }
    } catch (e) {
      if (e?.code === 'MISSING_TITLE' || e?.code === 'INVALID_TITLE') {
        // setError('title', 'error', e.message)
      } else {
        // setError('description', 'error', 'Internal Server Error')
      }
      console.error(e)
    }
  }

  const [userId, setUserId] = useState('')
  const [thisWeek, setThisWeek] = useState('')
  const [nextWeek, setNextWeek] = useState('')
  const [comments, setComments] = useState('')
  const mattUser = users && users.find((user) => user.name === 'Matt')

  const handleUsernameChange = (event) => {
    setUserId(event.target.value)
    if (mattUser.userId) {
      if (event.target.value === mattUser.userId) {
        if (thisWeek === '') {
          setThisWeek('Stuff')
        }
        if (nextWeek === '') {
          setNextWeek('Stuff')
        }
        if (comments === '') {
          setComments('Stuff')
        }
      }
    }
  }

  if (created) {
    return <Created />
  } else {
    return (
      <div className="NewReport">
        <div className="NewReportTitle"> Submit Your Report </div>
        <form onSubmit={onSubmit}>
          <SelectUsernameField
            selectedUser={userId}
            handleUsernameChange={handleUsernameChange}
            hint="Select Your Name"
            helperText={'This field is required.'}
          />
          <TextField
            className="TextField"
            id="thisWeek"
            label="This Week"
            multiline
            rows={5}
            variant="outlined"
            value={thisWeek}
            onChange={(event) => setThisWeek(event.target.value)}
            helperText={'This field is required.'}
            fullWidth
          />
          <TextField
            className="TextField"
            id="nextWeek"
            label="Next Week"
            multiline
            rows={5}
            variant="outlined"
            value={nextWeek}
            onChange={(event) => setNextWeek(event.target.value)}
            fullWidth
          />
          <TextField
            className="TextField"
            id="comments"
            label="Comments"
            multiline
            rows={5}
            variant="outlined"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            fullWidth
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default NewReportForm
