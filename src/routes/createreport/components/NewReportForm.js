import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Created from './Created'
import SelectUsernameField from '../../boss/components/SelectUsernameField'

function NewReportForm() {
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

  const handleUsernameChange = (event) => {
    setUserId(event.target.value)
  }

  if (created) {
    return <Created />
  } else {
    return (
      <div style={{ padding: '20px', margin: '0 auto', width: 'fit-content' }}>
        <div style={{ fontSize: '28px', fontWeight: '700', paddingBottom: '20px', color: '#124191' }}>
          {' '}
          Submit Your Report{' '}
        </div>
        <form onSubmit={onSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SelectUsernameField
              selectedUser={userId}
              handleUsernameChange={handleUsernameChange}
              hint="Select Your Name"
            />
            <TextField
              style={{ paddingBottom: '10px', width: '400px' }}
              id="thisWeek"
              label="This Week"
              multiline
              rows={5}
              variant="outlined"
              value={thisWeek}
              onChange={(event) => setThisWeek(event.target.value)}
            />
            <TextField
              style={{ paddingBottom: '10px', width: '400px' }}
              id="nextWeek"
              label="Next Week"
              multiline
              rows={5}
              variant="outlined"
              value={nextWeek}
              onChange={(event) => setNextWeek(event.target.value)}
            />
            <TextField
              style={{ paddingBottom: '30px', width: '400px' }}
              id="comments"
              label="Comments"
              multiline
              rows={5}
              variant="outlined"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default NewReportForm
