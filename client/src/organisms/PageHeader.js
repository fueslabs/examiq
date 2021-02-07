import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Job from '../molecules';
import { ELink } from '../atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}rem ${theme.spacing(2)}rem`,
    minHeight: '150vh',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.light,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 700,
    fontSize: 72,
  },
  body: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
  rowGrid: {
    marginTop: theme.spacing(2),
    display: 'flex',
    columnGap: theme.spacing(2),
    '-webkit-column-gap': theme.spacing(2),
  }
}));

const PageHeader = (props) => {
  const { title, imgSrc } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} lg={4}>
        <Typography
          variant="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body1" className={classes.body}>Open source AI that lets you convert notes to exams in minutes.</Typography>
        <div className={classes.rowGrid}>
          <ELink name="source" login href="https://github.com/fueslabs/examiq/" target="_blank" rel="noopener"/>
          <ELink name="reviews" filled/>
        </div>
      </Grid>
      <Grid item xs={12} lg={8}>
        <img src={imgSrc} alt="banner" width="100%" height="555px"/>
      </Grid>
    </Grid>
  );
}
  
export default PageHeader;