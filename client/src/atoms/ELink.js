import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ELink = (props) => {
  const { name, login, filled } = props;
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
      transition: 'color 0.1s ease-in',
      '&:hover': {
        color: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
      }
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant={login? "outlined": filled? "contained": ""} 
        color="inherit"
        className={classes.link}
      >
        {name}
      </Button>
    </div>
    );
  }
  
  export default ELink;