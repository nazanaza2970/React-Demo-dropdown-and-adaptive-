import './App.css';
import React, {Fragment}from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Media from 'react-media';

import Small from './components/Small';
import Medium from './components/Medium';
import Large from './components/Large';

function App() {
  return (
    <div className="App" >
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <Small/>}
              {matches.medium && <Medium/>}
              {matches.large && <Large/>}
            </Fragment>
          )}
        </Media>
    </div>
  );
}

export default App;

{/* <ButtonAppBar/>
<LiteYouTubeEmbed 
  id="L2vS_050c-M"
  title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
/>
<CustomizedAccordions/> */}