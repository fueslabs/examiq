import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
      fontFamily: 'IBM Plex Mono, monospace',
    },
    bar: {
    },
    links: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing(2),
    },
    user: {
      borderRadius: '50%',
      marginRight: theme.spacing(1),
      height: '32px',
      width: 'auto',
    },
    userName: {
      fontFamily: 'IBM Plex Mono, monospace',
      marginRight: theme.spacing(2),
      fontSize: '15px',
    },
}));


const HideOnScroll = (props) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const classes = useStyles();
    const isWeb = useMediaQuery('(min-width:600px)');
    return (
        <HideOnScrollBar className={classes.root} {...props}>
            <AppBar className={classes.bar}>
                <Toolbar>
                    <Logo name={isWeb?'ExamIQ':''} />
                    <div className={classes.links}>
                      {isWeb && (
                        <>
                        {/* <ELink name="home" routeTo="/" /> */}
                        <ELink name="about" routeTo="about" />
                        <ELink name="teachers" routeTo="teachers" />
                        <ELink name="blog" routeTo="blog" />
                        <ELink name="contact" routeTo="contact" />
                        <ELink name="faq" routeTo="faq" />
                        </>
                      )}
                    </div>
                    {isAuthenticated && (
                      <>
                      <img src={user.picture} alt={user.name} className={classes.user} />
                      <Typography variant="overline" className={classes.userName}>{user.name.split(' ')[0]}</Typography>
                      <ELink name="logout" login action={() => logout()} />
                      </>
                    )}
                    {!isAuthenticated && (
                      <ELink name="login" login action={() => loginWithRedirect()} />
                    )}
                </Toolbar>
            </AppBar>
        </HideOnScrollBar>
    )
}

export default HideOnScroll;