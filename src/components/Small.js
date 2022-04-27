import React from 'react'
import ButtonAppBar from './Appbar';
import CustomizedAccordions from './Accordion';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Media from 'react-media';

const Small = () => {
  return (
    <div><ButtonAppBar/>
    <LiteYouTubeEmbed 
      id="L2vS_050c-M"
      title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
    />
    <CustomizedAccordions/></div>
  )
}

export default Small