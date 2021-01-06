import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "@reach/router";

const ELink = (props) => {
  const { name, login, filled, action, routeTo, ...rest } = props;

  

  const useStyles = makeStyles((theme) => ({
    root: {
  
    },
    link: {
      width: theme.spacing(12),
      height: theme.spacing(4),
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '14px',
      fontWeight: 500,
      borderColor: '#6d6e70',
      color: filled? '#333333': theme.palette.secondary.light,
      textDecoration: 'none',
      '&:hover': {
        color: login ? theme.palette.primary.light: theme.palette.primary.light.contrastText,
        borderColor: theme.palette.secondary.light,
        backgroundColor: login ? theme.palette.secondary.light: '',
      },
    },
    reachLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    },
    active: {
      color: theme.palette.secondary.light,
      textDecoration: 'none',
    }
  }));
  const classes = useStyles();

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: classes.active } : {}
  }

  return (
    <div className={classes.root}>
      <Button
        variant={login? "outlined": filled? "contained": ""} 
        color="inherit"
        className={classes.link}
        onClick={() => action != null ? action(): console.log('foo')}
        {...rest}
      >
        {routeTo && (
          <Link to={routeTo} className={classes.reachLink} getProps={isActive} {...props}>{name}</Link>
        )}
        {!routeTo && (
          `${name}`
        )}
      </Button>
    </div>
    );
  }
  
  export default ELink;