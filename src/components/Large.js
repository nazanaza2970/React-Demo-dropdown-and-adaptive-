import React from 'react'
import ButtonAppBar from './Appbar';
import CustomizedAccordions from './Accordion';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Media from 'react-media';
import Grid from '@mui/material/Grid';

const Large = () => {
  return (
    <Grid container spacing={2}>
        <Grid item lg={12}>
        <ButtonAppBar/>
        </Grid>
        <Grid item lg={8}>
    <LiteYouTubeEmbed 
      id="L2vS_050c-M"
      title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
    />
    </Grid>
    <Grid item lg={4}>
    <CustomizedAccordions/>
    </Grid>
    </Grid>
  )
}

export default Large