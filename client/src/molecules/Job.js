import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      margin: '1rem auto',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
      textAlign: 'left',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

const Job = (props) => {
    const { job } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded={false}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Title:&nbsp;{job.title}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Company:&nbsp;{job.company}</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.column}>
                        <Chip label={`Rating: ${job.rating}`} avatar={<StarIcon fontSize="small" />} />
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        <br />
                        <a href="#secondary-heading-and-columns" className={classes.link}>
                            Learn more
                        </a>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button size="small">save for later</Button>
                    <Button size="small" color="primary">
                        apply
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}

export default Job;