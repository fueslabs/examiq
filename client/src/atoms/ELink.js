import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  link: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    fontSize: '14px',
    borderColor: '#6d6e70',
  },
}));

const ELink = (props) => {
  const { name } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button 
        variant="outlined"
        color="inherit"
        className={classes.link}
      >
        {name}
      </Button>
    </div>
    );
  }
  
  export default ELink;