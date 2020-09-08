import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function ReportAccordion({ summary, details }) {
  const withNewLines = (text) => {
    const lines = text.split('\n')
    return lines.map((line, index) => {
      return <p key={index}>{line}</p>
    })
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <p>
            <strong>This Week</strong>
          </p>
          {withNewLines(details.thisWeek)}
          {details.nextWeek && (
            <>
              <p>
                <strong>Next Week</strong>
              </p>
              {withNewLines(details.nextWeek)}
            </>
          )}
          {details.comments && (
            <p>
              <strong>Comments</strong>
            </p>
          )}
          {withNewLines(details.comments)}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default ReportAccordion
