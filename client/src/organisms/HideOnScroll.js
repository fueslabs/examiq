import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from '../atoms';

function HideOnScrollBar(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const useStyles = makeStyles((theme) => ({
    bar: {
      backgroundColor: '#f6f8fa',
      color: '#333333',
    },
    links: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    }
}));


const HideOnScroll = (props) => {
    const classes = useStyles();
    return (
        <HideOnScrollBar {...props}>
            <AppBar className={classes.bar}>
                <Toolbar>
                    <Logo name={'ExamIQ'} />
                    <div className={classes.links}>
                      <Button color="inherit">home</Button>
                      <Button color="inherit">about</Button>
                      <Button color="inherit">teachers</Button>
                      <Button color="inherit">blog</Button>
                      <Button color="inherit">apply</Button>
                      <Button color="inherit">contact</Button>
                      <Button color="inherit">faq</Button>
                    </div>
                    <Button color="inherit">login</Button>
                </Toolbar>
            </AppBar>
        </HideOnScrollBar>
    )
}

export default HideOnScroll;