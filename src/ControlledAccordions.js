import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import chatLounge from './feature_screenshots/chat-lounge.png';
import research from './feature_screenshots/feature-research.jpg';
import requestsCompleted from './feature_screenshots/feature-requests.png';
import tradeAlerts from './feature_screenshots/feature-trade-alerts.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    // maxWidth: 1050,
    background: 'linear-gradient(45deg, #CAA11F 20%, #735C12 60%)',
    margin: 50,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 1,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#ffffff',
  },
  container: {
    backgroundColor: '#2F3136',
    // justifyItems: 'center',
  },
  chat: {
    maxWidth: 250,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div>
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} className={classes.container} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography className={classes.heading}>Chat Lounge</Typography>
            <Typography className={classes.secondaryHeading}>Multiple specified chat rooms with active, insightful users.</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <img className={classes.chat} src={chatLounge} alt="feature-img"/>
            {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                maximus est, id dignissim quam.
            </Typography> */}
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} className={classes.container} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography className={classes.heading}>Propreitary Research & Analysis</Typography>
            <Typography className={classes.secondaryHeading}>
                Access to proprietary research I publish and my analysis.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography> */}
            <img className={classes.chat} src={research} alt="feature-img"/>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} className={classes.container} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography className={classes.heading}>Chart Requests</Typography>
            <Typography className={classes.secondaryHeading}>
                Members can request a chart simply by entering a ticker.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
            </Typography> */}
            <img className={classes.chat} src={requestsCompleted} alt="feature-img"/>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} className={classes.container} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography className={classes.heading}>Daily Trade Alerts</Typography>
            <Typography className={classes.secondaryHeading}>
                Highlighting daily trades with price objectives.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
            </Typography> */}
            <img className={classes.chat} src={tradeAlerts} alt="feature-img"/>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}