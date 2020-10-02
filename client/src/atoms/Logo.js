import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logoSrc from '../static/pen.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
  },
  title: {
    paddingLeft: theme.spacing(1),
    fontWeight: 700,
    fontSize: '24px',
  }
}));

const Logo = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logoSrc} alt="startupcub logo" className={classes.logo} />
      <Typography variant="h6" className={classes.title}>
          {name}
      </Typography>
    </div>
    );
  }
  
  export default Logo;