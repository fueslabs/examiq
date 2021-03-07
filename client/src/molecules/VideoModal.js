import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Close from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    border: 'none',
  },
  closeRoot: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(4),
  },
  close: {
  },
  modal: {
    backgroundColor: 'rgba(55,55,55,0.8)',
    color: theme.palette.secondary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  video: {
    width: '80vw',
    height: '70vh',
  }
}));

const VideoModal = (props) => {
  const { isOpen, onClose, videoSrc } = props;
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="examiq demo video"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          disableAutoFocus={true}
        >
          <div style={{ outline: 0, }}>
            <iframe title="examiq demo video" className={classes.video} src={videoSrc} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <IconButton className={classes.closeRoot} color="secondary" onClick={onClose}>
              <Close className={classes.close} />
            </IconButton>
          </div>
        </Modal>
      </div>
    );
  }
  
  export default VideoModal;