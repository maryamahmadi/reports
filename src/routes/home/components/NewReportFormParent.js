import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Created from './Created'

function NewReportFormParent () {
    const CustomButton = withStyles({
        root: {
            width: '100px',
            color: 'white',
            backgroundColor: '#124191',
            '&:hover': {
                backgroundColor: '#1a59c4'
            },
        }
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
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username, 
                    thisWeek, 
                    nextWeek,
                    comments: comments
                })
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

    const [username, setUsername] = useState('')
    const [thisWeek, setThisWeek] = useState('')
    const [nextWeek, setNextWeek] = useState('')
    const [comments, setComments] = useState('')
    if (created) {
        return <Created />
    } else {
        return (
        <div style={{padding: '20px'}}>
            <div style={{fontSize: '28px', fontWeight: '700', paddingBottom: '10px', color: '#124191'}}> Submit Your Report </div>
            <form onSubmit={onSubmit}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label style={{paddingBottom: '5px'}}>
                        Name:
                    </label>
                    <select 
                        style={{width: '300px', marginBottom: '20px', padding: '4px 0 4px 0'}}
                        value={username} 
                        onChange={(event)=> setUsername(event.target.value)}>
                        <option value='' disabled defaultValue hidden>Select Your Name</option>
                        <option value='ahmad'>Ahmad</option>
                        <option value='alanI'>Alan I</option>
                        <option value='alanC'>Allan C</option>
                        <option value='chris'>Chris</option>
                        <option value='gloria'>Gloria</option>
                        <option value='jaspreet'>Jaspreet</option>
                        <option value='kevin'>Kevin</option>
                        <option value='maryam'>Maryam</option>
                        <option value='matt'>Matt</option>
                        <option value='mayuran'>Mayuran</option>
                        <option value='paul'>Paul</option>
                        <option value='rohit'>Rohit</option>
                        <option value='saad'>Saad</option>
                        <option value='shahram'>Shahram</option>
                        <option value='tao'>Tao</option>
                        <option value='ukeme'>Ukeme</option>
                    </select>   
                    <label 
                    style={{paddingBottom: '5px'}}>
                        What did you do this week?
                    </label>
                    <textarea 
                        style={{width: '700px', height: '150px', marginBottom: '20px'}}
                        value={thisWeek} 
                        onChange={(event)=> setThisWeek(event.target.value)} />
                    <label style={{paddingBottom: '5px'}}>
                        What will you be working on next week?
                    </label>
                    <textarea 
                        style={{width: '700px', height: '100px', marginBottom: '20px'}}
                        value={nextWeek} 
                        onChange={(event)=> setNextWeek(event.target.value)} />
                    <label style={{paddingBottom: '5px'}}>
                        Comments
                    </label>
                    <textarea 
                        style={{width: '700px', height: '50px', marginBottom: '20px'}}
                        value={comments} 
                        onChange={(event)=> setComments(event.target.value)} />
                    <CustomButton type='submit'>Submit</CustomButton>
                    </div>
            </form>
        </div>)
    }
}
export default NewReportFormParent
