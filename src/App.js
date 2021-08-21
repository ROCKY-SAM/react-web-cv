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
          {/* <b>Hey, I’m Sam</b> */}
          <p className="bodyText">
            <b>I’m living the dream.</b>
            <hr></hr>
            I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices.
            Today, I’m working from home as a software engineer for <b>BoardPAC (Pvt) Ltd</b>, and I am getting into <b>Amazon Web Services</b> on my own time.
            <br></br>
            <br></br>
            Familiar with a variety of programming languages, including JavaScript, Python and React, but I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!
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
