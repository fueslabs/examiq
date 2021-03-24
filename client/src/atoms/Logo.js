import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import logoSrc from '../static/pen.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    height: '36px',
    width: 'auto',
  },
  brand: {
    color: theme.palette.secondary.light,
    marginLeft: theme.spacing(1),
    fontFamily: 'Audiowide, cursive',
    fontSize: 22,
    textTransform: 'uppercase',
  },
  name: {
    color: theme.palette.secondary.light,
    marginLeft: theme.spacing(1),
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 700,
    fontSize: 20,
  }
}));

const Logo = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
      <a href="/" className={classes.root}>
        {/* <img src={logoSrc} alt={name} className={classes.logo} /> */}
        <Typography variant="body1" className={classes.brand}>{'fues'}</Typography>
        <Typography variant="body1" className={classes.name}>{name}</Typography>
      </a>
    );
  }
  
  export default Logo;