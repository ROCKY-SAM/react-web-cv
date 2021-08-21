import './App.css';
import propic from './propic.jpeg';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Accordion from './Accordion';
import { accordionData } from './content';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column col-4">
          <div className="column-card">
            <p className="userDataName">S.M Abeysekara</p>
            <p className="userDataJobTitle">Software Engineer</p>
          </div>
          <div className="column-card-social">
            <SocialMediaIconsReact
              icon="linkedin"
              roundness="32%"
              borderWidth="0"
              url="https://www.linkedin.com/in/sameera-abeysekara-453b6a76/" size="60" />

            <SocialMediaIconsReact
              icon="facebook"
              roundness="32%"
              borderWidth="0"
              url="https://www.facebook.com/rockysam1993" size="60" />

            <SocialMediaIconsReact
              icon="youtube"
              roundness="32%"
              borderWidth="0"
              url="https://www.youtube.com/c/ROCKYSAM1993" size="60" />

            <SocialMediaIconsReact
              icon="github"
              roundness="32%"
              borderWidth="0"
              url="https://github.com/ROCKY-SAM" size="60" />
          </div>
        </div>
        <div className="image-card colImg-size">
          <img src={propic} className="propic"></img>
        </div>
        <div className="card-bio col-5">
          <b>Hey, I’m Sam</b>
          <p className="bodyText">Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column col-4">
          <div className="column-card-kb">
            <b>Knowledge Background</b>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
        <div className="column col-5">
          <div className="card-last-row"><p>#Angular</p></div>
          <div className="card-last-row"><p>#React</p></div>
          <div className="card-last-row"><p>#PHP</p></div>
          <div className="card-last-row"><p>#.Net Core</p></div>
          <div className="card-last-row"><p>#MySQL</p></div>
          <div className="card-last-row"><p>#MSSQL</p></div>
          <div className="card-last-row"><p>#OracleDB</p></div>
          <div className="card-last-row"><p>#FireBase</p></div>
          <div className="card-last-row"><p>#ReactNative</p></div>
          <div className="card-last-row"><p>#Ionic</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
