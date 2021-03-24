import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, PageHeader } from '../organisms';
import indexBannerSvg from '../static/index-banner.svg';
const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Faq = (props) => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <PageHeader title={'FAQ'} imgSrc={indexBannerSvg} />
    </Layout>
  );
}
  
export default Faq;