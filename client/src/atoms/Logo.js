import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logoSrc from '../static/examiq.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8
    }
  },
  logo: {
    height: '36px',
    width: 'auto',
  },
  name: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: 18,
    fontWeight: 700,
    marginLeft: theme.spacing(1),
    textTransform: 'capitalize',
    color: theme.palette.secondary.light,
  }
}));

const Logo = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
      <a href="/" className={classes.root}>
        <img src={logoSrc} alt={name} className={classes.logo} />
        <Typography variant="overline" className={classes.name}>{name}</Typography>
      </a>
    );
  }
  
  export default Logo;