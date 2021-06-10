import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Video from './pages/Video';
import './App.css';
import './pages/Description.css';
import adamiteStone from './assets/adamite.jpg';
import Description from './pages/Description';
import SidebarDescription from './pages/SidebarDescription';
import InstallationGuide from './pages/GettingStarted';

export default function App() {
  return (
    <Router basename={"/adamite-docs"}>
    <div className="App">
      <nav>
        <Link to="/">Home</Link> &nbsp; &nbsp;
      <Link to="/docs">Documentation</Link>
      </nav>
          

      
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="//">
        <Home />
      </Route>
      {/* <Route exact path="/adamite-docs">
        <Home />
      </Route> */}
      <Route  path="/docs">
        <Docs />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

function Home() {
  const [showVideo, setShowVideo] = useState(false);
    return(
      <header className="App-header">
        <div className="body-description">
          <div className="img-container">
          <img src={adamiteStone} alt="Adamite stone" />
          </div>
          <b>Adamite</b> is an annotation tool designed to help developers when learning a new software framework.
          <br />
          <a href="https://drive.google.com/file/d/1iZVJ7-paTvxFk05is-cDABp5VmjO6aSz/view?usp=sharing" className="btn">Download Adamite here!</a>
          &nbsp; &nbsp;<Link to="/docs#installation" className="btn">Installation Instructions Here</Link>
        </div>
        <h2 id="Overview">Overview</h2>
        <div className="description">
          <p>
            Adamite is a browser plugin that supports annotating web resources, such as documentation. Currently, Adamite only works on the Chrome web browser running on a desktop computer (not on phones or tablets).
          </p>
          
          You can use Adamite's annotation types to organize and structure the information you find online and save it into a sidebar.
          With Adamite's searching, tagging, filtering, and pinning mechanisms, you can keep track of the information you want to follow up on.
          You can also connect information using Adamite's multi-anchoring system, as you try and find useful information.
          You can then share your annotations with your colleagues, using Adamite's group system.
          <hr />
          The Chrome extension is currently in the development stage as part of the <a href="http://www.cs.cmu.edu/~NatProg/" className="embedded-link">Natural Programming Project</a>.
        <hr />
          Team members: <a href="http://www.amberhorvath.com" className="embedded-link">Amber Horvath</a>, <a href="https://lxieyang.github.io/" className="embedded-link">Michael Liu</a>, Connor Shannon, River Hendriksen, <a href="https://kazijawad.com/" className="embedded-link">Kazi Jawad</a>, Andrew Macvean, and <a href="http://www.cs.cmu.edu/~bam/" className="embedded-link">Brad Myers</a>.

        </div>
        <h2>Publications</h2>
        <div className="description extra">
          Amber Horvath, Michael Xieyang Liu, Connor Shannon, River Hendriksen, Kazi Jawad, Lai Wei, Andrew Macvean, Brad A Myers, "ADAMITE: Developer-Authored Annotations Facilitate API Learning" (in-submission).

        <div>
          <p>
        {!showVideo ? 
                        (<div style={{cursor: "pointer"}} className="embedded-link" onClick={() => setShowVideo(true)}>
                            <b>Click here to show a 5-minute video demo of Adamite.</b>
                            </div>)
                    : 
                        (<div style={{cursor: "pointer"}} className="embedded-link" onClick={() => setShowVideo(false)}>
                            <b>Hide?</b>
                        </div>)}
                    {showVideo && <div className="img-container">
                        <Video path={'video/adamite-demo.mp4'}/>
                    </div>}
                    </p>
        </div>
        </div>
        <h2>Funding</h2>
        <div className="description extra">
          This work is funded by NSF grant "Personalizing API Documentation" (award CCF-2007482) and Google.
          <p>
          Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect those of the National Science Foundation or any other sponsor.
          </p>
        </div>
        
      </header>
    )

}

function Docs() {
  return (
    <div className="Docs">
      <header className="Docs-header container">
          <h2 className="pageHeader">Adamite Overview</h2>
          <InstallationGuide />
          <SidebarDescription />
          <Description />
          
      </header>
    </div>
  );
}
