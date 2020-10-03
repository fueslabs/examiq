import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageHeader } from '../organisms';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PageHeader title={'ExamIQ: Intelligent Question Generator'} />
    </div>
  );
}
  
export default Home;