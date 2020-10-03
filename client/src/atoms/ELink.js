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
      width: theme.spacing(10),
      height: theme.spacing(3),
      fontSize: '14px',
      fontWeight: 500,
      borderColor: '#6d6e70',
      color: filled? '#333333': theme.palette.primary.contrastText,
      textDecoration: 'none',
      '&:hover': {
        color: login ? theme.palette.secondary.light.contrastText: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
        backgroundColor: login ? theme.palette.secondary.light: '',
      },
    },
    reachLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.light,
      },
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