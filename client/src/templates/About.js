import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageHeader } from '../organisms';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PageHeader title={'About ExamIQ'} />
    </div>
  );
}
  
export default About;