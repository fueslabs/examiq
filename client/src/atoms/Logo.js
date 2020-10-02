import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import logoSrc from '../static/pen.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '44px',
    width: 'auto',
  },
  title: {
    paddingLeft: theme.spacing(0.5),
    fontWeight: 500,
    fontSize: '20px',
  }
}));

const Logo = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="/">
        <img src={logoSrc} alt={name} className={classes.logo} />
      </a>
    </div>
    );
  }
  
  export default Logo;