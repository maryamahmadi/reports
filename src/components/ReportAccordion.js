import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ReportAccordion({ summary, details }) {
  console.log("details", details);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <strong>This Week</strong>
          <p>{details.thisWeek}</p>
          {details.nextWeek && (
            <>
              <strong>Next Week</strong>
              <p>{details.nextWeek}</p>
            </>
          )}
          {details.comments && <strong>Comments</strong>}
          <p>{details.comments}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ReportAccordion;
