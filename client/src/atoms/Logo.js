import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logoSrc from '../static/robot.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    paddingLeft: theme.spacing(0.5),
    fontWeight: 700,
  }
}));

const Logo = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logoSrc} alt="startupcub logo" width="36px" />
      <Typography variant="h6" className={classes.title}>
          {name}
      </Typography>
    </div>
    );
  }
  
  export default Logo;