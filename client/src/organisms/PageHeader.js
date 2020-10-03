import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Job from '../molecules';
import { ELink } from '../atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(0.75)}rem ${theme.spacing(0.25)}rem`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '150vh',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  rowGrid: {
    marginTop: theme.spacing(2),
    display: 'flex',
    columnGap: theme.spacing(2),
  }
}));

const PageHeader = (props) => {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        className={classes.title}
      >
        {title}
      </Typography>
      <iframe src="https://ghbtns.com/github-btn.html?user=fuesco&repo=examiq&type=star&count=true&size=small" frameborder="0" scrolling="0" width="80" height="30" title="GitHub"></iframe>
      <Typography variant="body1">Open-source AI for converting notes to exams in minutes.</Typography>
      <div className={classes.rowGrid}>
        <ELink name="source" login href="https://github.com/fuesco/examiq/" target="_blank" />
        <ELink name="reviews" filled/>
      </div>
    </div>
  );
}
  
export default PageHeader;