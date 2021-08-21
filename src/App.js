import './App.css';
import propic from './propic.jpeg';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Accordion from './Accordion';
import { accordionData, myworkexpreice } from './content';
import hnbAssurance from './hnbassurance.png';
import lankacom from './lankacom.png';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="image-card colImg-size">
          <img src={propic} className="propic" alt="profile image"></img>
        </div>
        <div className="card-bio col-6">
          <p className="userDataName">S.M Abeysekara</p>
          <p className="userDataJobTitle">Software Engineer</p>
          <a className="userDataEmail" href="mailto:abeysekaramadushanka14@gmail.com">@abeysekaramadushanka14</a>
          <p className="bodyText">
            <b>I’m living the dream.</b>
            <hr></hr>
            I’ve always been a great problem solver, and a technophile obsessed with the latest devices.
            Today, I’m working from home as a software engineer for <b>BoardPAC (Pvt) Ltd</b>, and I am getting into <b>Amazon Web Services</b> on my own time.
            <br></br>
            <br></br>
            Familiar with a variety of programming languages, including JavaScript, Python and React, but I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!
          </p>
        </div>
        <div className="column col-3">
          <div className="column-card-social">
            <SocialMediaIconsReact
              icon="linkedin"
              roundness="40%"
              borderWidth="0"
              url="https://www.linkedin.com/in/sameera-abeysekara-453b6a76/" size="60" />
            <SocialMediaIconsReact
              icon="facebook"
              roundness="40%"
              borderWidth="0"
              url="https://www.facebook.com/rockysam1993" size="60" />
            <SocialMediaIconsReact
              icon="youtube"
              roundness="40%"
              borderWidth="0"
              url="https://www.youtube.com/c/ROCKYSAM1993" size="60" />
            <SocialMediaIconsReact
              icon="github"
              roundness="40%"
              borderWidth="0"
              url="https://github.com/ROCKY-SAM" size="60" />
          </div>
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

      <div className="row">
        <div className="column col-4">
          <div className="column-card-kb">
            <b>Education</b>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>

        <div className="column col-4">
          <div className="column-card-kb workExpDiv">
            <img src={hnbAssurance} className="workPic" alt="profile image"></img>
            <b>{myworkexpreice[0].company}</b>
            <b className="position">{myworkexpreice[0].position}</b>
            <b>{myworkexpreice[0].tag}</b>
            <div className="workExp" dangerouslySetInnerHTML={{ __html: myworkexpreice[0].description }}></div>
          </div>
        </div>
        <div className="column col-4">
          <div className="column-card-kb workExpDiv">
            <img src={lankacom} className="workPic" alt="profile image"></img>
            <b>{myworkexpreice[1].company}</b>
            <b className="position">{myworkexpreice[1].position}</b>
            <b>{myworkexpreice[1].tag}</b>
            <div className="workExp" dangerouslySetInnerHTML={{ __html: myworkexpreice[1].description }}></div>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
