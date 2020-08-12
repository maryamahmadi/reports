import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

function NewReportFormParent () {
    const onSubmit = (event) => {
        // submit
        console.log('name', name)
        console.log('last', lastWeek)
        console.log('next', nextWeek)
        console.log('comments', comments)
        event.preventDefault()
    }
    const [name, setName] = useState('')
    const [lastWeek, setLastWeek] = useState('')
    const [nextWeek, setNextWeek] = useState('')
    const [comments, setComments] = useState('')
    return (
        <div style={{padding: '20px'}}>
            <form onSubmit={onSubmit}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label style={{paddingBottom: '5px'}}>
                        Name:
                    </label>
                    <select 
                        style={{width: '300px', marginBottom: '20px', padding: '4px 0 4px 0'}}
                        value={name} 
                        onChange={(event)=> setName(event.target.value)}>
                        <option value='' disabled selected hidden>Select Your Name</option>
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
                        What did you do last week?
                    </label>
                    <textarea 
                        style={{width: '700px', height: '150px', marginBottom: '20px'}}
                        value={lastWeek} 
                        onChange={(event)=> setLastWeek(event.target.value)} />
                    <label style={{paddingBottom: '5px'}}>
                        What will you be working on next week?
                    </label>
                    <textarea 
                        style={{width: '700px', height: '150px', marginBottom: '20px'}}
                        value={nextWeek} 
                        onChange={(event)=> setNextWeek(event.target.value)} />
                    <label style={{paddingBottom: '5px'}}>
                        Comments
                    </label>
                    <textarea 
                        style={{width: '700px', height: '50px', marginBottom: '20px'}}
                        value={comments} 
                        onChange={(event)=> setComments(event.target.value)} />
                    <Button type='submit'>Submit</Button>
                    </div>
            </form>
        </div>
    )
}
export default NewReportFormParent
// <textArea value={this.state.value} onChange={this.handleChange}
// <select value={this.state.value} onChange={this.handleChange}