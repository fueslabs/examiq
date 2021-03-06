import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Send from '@material-ui/icons/SendOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
// import Job from '../molecules';
import { ELink } from '../atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}rem ${theme.spacing(0.75)}rem`,
    minHeight: '150vh',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.light,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 700,
    fontSize: 96,
  },
  body: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
  rowGrid: {
    marginTop: theme.spacing(2),
    display: 'flex',
    columnGap: theme.spacing(2),
    '-webkit-column-gap': theme.spacing(2),
  },
  waitlistRoot: {
    backgroundColor: '#111111',
    width: theme.spacing(50),
    borderColor: theme.palette.secondary.light,
  },
  waitlistForm: {
    color: theme.palette.secondary.light,
    fontFamily: 'IBM Plex Mono, monospace',
  },
  monoText: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
  sendIcon: {
    color: theme.palette.secondary.light,
    fontSize: 20,
    marginRight: theme.spacing(2),
  },
  snackbarBody: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
}));

const WaitlistSnackbar = (props) => {
  const { open, handleClose } = props
  const classes = useStyles()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Email submitted to early access!"
      ContentProps={{
        classes: {
          root: classes.snackbarBody
        }
      }}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
)
}

const PageHeader = (props) => {
  const { title, imgSrc } = props;
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');


  const submitWaitlist = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({
          'Email': email,
        }),
      });
      setIsSubmitted(!isSubmitted);
      setEmail('');
    } catch (err) {
      console.error(err);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSubmitted(false);
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} lg={4}>
        <Typography
          variant="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body1" className={classes.body}>AI that lets you convert notes to exams in minutes.</Typography>
        <Typography variant="overline" className={classes.monoText}>get early access</Typography>
        <form method="POST" name="waitlist" noValidate autoComplete="off" onSubmit={e => submitWaitlist(e)}>
          <TextField 
            id="waitlist-form" 
            className={classes.waitlistRoot}
            placeholder="hello@me.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ 
              className: classes.waitlistForm,
              endAdornment: (
                <Tooltip title="Submit">
                  <IconButton
                    aria-label="send waitlist form"
                    onClick={(e) => submitWaitlist(e)}
                    edge="end"
                    type="submit"
                  >
                    <Send className={classes.sendIcon} />
                  </IconButton>
                </Tooltip>
              )
            }}
          />
          <WaitlistSnackbar open={isSubmitted} handleClose={handleClose} />
        </form>
        <div className={classes.rowGrid}>
          <ELink name="source" login href="https://github.com/fueslabs/examiq/" target="_blank" rel="noopener"/>
          <ELink name="reviews" routeTo="reviews" filled/>
        </div>
      </Grid>
      <Grid item xs={12} lg={8}>
        <img src={imgSrc} alt="banner" width="100%" height="555px"/>
      </Grid>
    </Grid>
  );
}
  
export default PageHeader;