import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Logo, ELink } from '../atoms';

function HideOnScrollBar(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={100}>
      {children}
    </Slide>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      transition: 'all 2s ease-out',
    },
    bar: {
      backgroundColor: '#f6f8fa',
      color: '#333333',
      transition: 'all 2s ease-out',
    },
    links: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      columnGap: theme.spacing(1),
      marginRight: theme.spacing(2),
    }
}));


const HideOnScroll = (props) => {
    const classes = useStyles();
    return (
        <HideOnScrollBar className={classes.root} {...props}>
            <AppBar className={classes.bar}>
                <Toolbar>
                    <Logo name={'ExamIQ'} />
                    <div className={classes.links}>
                      <ELink name="home" />
                      <ELink name="about" />
                      <ELink name="blog" />
                      <ELink name="faq" />
                    </div>
                    <ELink name="login" />
                </Toolbar>
            </AppBar>
        </HideOnScrollBar>
    )
}

export default HideOnScroll;