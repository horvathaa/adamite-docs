import React, { useState } from 'react';
import Video from './Video';

import './Description.css';
// import installGif from '../assets/adamite-install.gif';
import options from '../assets/options.png';
import urlBar from '../assets/chrome-url-bar.png';
import newUser from '../assets/new-user.png';
import fresh from '../assets/fresh-sidebar.png';
import dialogue from '../assets/dialogue-pop.png';
import newAnno from '../assets/create-new-annotation.png';
import updated from '../assets/updated-sidebar.png';
import badge from '../assets/adamite-badge.png';

const InstallationGuide = () => {

    // const [showGif, setShowGif] = useState(false);
    const [showVideo, setShowVideo] = useState(false);



    return(
        <div >
            <div className="sub-header">
                Getting Started with Adamite
                <div className="sub-sub-header" id="installation">
                    Installing Adamite
                </div>
                <div className="adamite-description">
                Currently, Adamite is in a limited, beta release - you may sign up for our field study and use Adamite by <a href="https://forms.gle/T2qXv4pjUfHbthUA9" className="embedded-link">filling out this form</a>.
                
                <br /> 
                <br /> 
                Once you have downloaded and unzipped the file, follow these steps:
                <ol className="instruction-list">
                    <li>Go to chrome://extensions (Chrome's extension page)
                        <ul>
                        <li className="sub-step">
                            You may do this by typing "chrome://extensions" in the URL bar, by clicking on the jigsaw puzzle icon by the URL bar and clicking on the "Manage Extensions" button, or by clicking on the three-dot menu, navigating to tools, and clicking on "Extensions" in the menu.
                        </li>
                        </ul>
                    </li>
                    <li>
                    In the top right corner of the page, toggle the "Developer Mode" option to “on”
                    </li>
                    <li>
                        Click the “Load Unpacked” button on the left side of the screen
                    </li>
                    <li>
                        Select the unzipped Adamite "build" folder
                    </li>
                    <li>
                    If not automatically pinned, pin Adamite to your extension bar:
                        <ul className="sub-step">
                            <li>
                            Click the jigsaw puzzle icon by the URL bar in Chrome’s navigation bar
                            </li>
                            <li>
                            Find Adamite in your list of extensions
                            </li>
                            <li>
                                Click the pin icon so that it is blue
                            </li>

                        </ul>
                    </li>
                    <li>
                    Congratulations -  Adamite is now installed!
                    </li>

                </ol>
                {!showVideo ? 
                    (<div style={{cursor: "pointer"}} className="embedded-link" onClick={() => setShowVideo(true)}>
                        Click here to show a 1-minute video of how to install Adamite.
                        </div>)
                : 
                    (<div style={{cursor: "pointer"}} className="embedded-link" onClick={() => setShowVideo(false)}>
                        Hide?
                    </div>)}
                </div>
                {showVideo && <div className="image-container">
                    <Video path={'video/adamite-install.mov'}/>
                </div>}
                <div className="sub-sub-header">
                    Setting Up Adamite
                </div>
                <div className="adamite-description">
                    With Adamite installed, you can set some preferences for how it operates.
                    <br />
                    <br />

                    When you are logged into your Adamite account,  you can click "Options" in the sandwich menu in the top right corner of the sidebar to go to the "Options" page.
                    <div className="image-container">
                        <img style={{border: "2px solid green"}} src={options} alt="Options shown in sidebar"/>
                    </div>

                    You can choose whether you want the sidebar to appear on the right or left side of your screen (default choice is right) and whether you want the content of the webpage that Adamite is on to shrink given the width of the sidebar (default choice is yes). Otherwise, Adamite overlays part of the webpage.

                </div>
                <div className="sub-sub-header">
                    Using Adamite for the First Time
                </div>
                <div className="adamite-description">
                    <p>
                        To begin using Adamite, navigate to a webpage you would like to annotate - for example, this documentation page!
                    </p>
                    <p>
                        The Adamite sidebar should open automatically. 
                        <ul>
                            <li>
                                If Adamite does not open, try clicking on the Adamite badge.
                            </li>
                            <li>
                                If that still doesn’t work, then try refreshing the page (sometimes Adamite doesn’t know to open on pages that were loaded before Adamite was installed).
                            </li>
                        </ul>
                        If you ever want to open or close the sidebar, you can click the Adamite badge at the right side of the Chrome URL navigation bar. When you are signed into Adamite, you can also close the sidebar by selecting the "Close Sidebar" option from the sandwich menu.
                    </p>

                    <div className="image-container">
                        <img style={{border: "2px solid green"}} src={urlBar} alt="Chrome URL bar with Adamite circled in extension list"/>
                    </div>
                    <p>
                        Adamite is the circled green gemstone badge in the figure shown above.
                    </p>
                    <p>
                        Adamite will remember whether you had it open or closed such that, when you refresh your tab, it will either open automatically if you previously had it open or will remain closed if you previously had it closed. 
                    </p>
                    <p>
                        When the Adamite sidebar opens, you can create a new account. You must have an account to use Adamite. Use a valid email address and make up your own password. You may also sign in with your Google account using Google's authentication.
                        <p>
                            <b> 
                                Please use the same email that you used when agreeing to the study consent form.
                            </b>
                        </p>
                    </p>
                    <div className="image-container">
                        <img style={{border: "2px solid green"}} src={newUser} alt="Adamite sign in dialogue in sidebar"/>
                    </div>
                    <p>
                        Once your account is created, you can begin annotating with Adamite.
                    </p>
                </div>
                <div className="sub-sub-header">
                    Making your First Annotation
                </div>
                <div className="adamite-description">
                Now that you are logged in, Adamite should look like this on this documentation page, which has an annotation on it:
                    <div className="image-container">
                        <img style={{border: "2px solid green"}} src={fresh} alt="New user sidebar"/>
                    </div>
                    <p>
                    We will soon go over all of Adamite’s sidebar’s features, but let’s begin by creating an annotation.
                    </p>
                    <ol className="instruction-list">
                        <li>
                            On your webpage of choice, highlight some text with your mouse.
                            <ul>
                                <li className="sub-step">
                                    Upon highlighting the text, a menu should appear just below the selection containing 5 buttons, each with an icon and text label.
                                    <div className="image-container">
                                        <img style={{border: "2px solid green"}} src={dialogue} alt="Adamite annotation creation popup"/>
                                    </div>
                                </li>
                                <li className="sub-step">
                                    Each button represents an <b>annotation type</b> - a way of structuring your annotation dependent upon what the goal of your annotation is. 
                                     {/* - we will discuss each annotation type in depth further on in the documentation */}
                                </li>
                            </ul>
                        </li>
                        <li>
                            Select which annotation type you want to create.
                            <ul>
                                <li className="sub-step">
                                    For now, you can select “normal”.
                                </li>    
                            </ul> 
                        </li>
                        <li>
                            The sidebar will update with an annotation editing pane - add the content you would like to annotate in the text editor (marked “2” in the figure) in the sidebar.
                                <div className="image-container">
                                    <img style={{border: "2px solid green"}} src={newAnno} alt="Marked up figure showing each part of the new annotation dialogue"/>
                                </div>
                                <ul>
                                    <li className="sub-step">
                                        The content you selected (marked “1” in the figure) is shown above the editing pane
                                    </li>
                                    <li className="sub-step">
                                    You can add tags (“3” in the figure) to help with searching for and categorizing your annotations and also change the type of the annotation with the dropdown menu (marked “4” in the figure).
                                    You can also choose whether to publish the annotation publicly, privately, or to a group using the posting dropdown menu (marked "5" in the figure).
                                    </li> 
                                </ul> 
                        </li>
                        <li>
                            Click the “Post as Private” or “Post as Public” button.
                        </li>
                        <li>
                            Congratulations, you created your first annotation!
                            <ul>
                                <li className="sub-step">
                                    Your annotation will appear in the sidebar and the text that you annotated will now stay highlighted on the webpage.
                                </li>
                                <div className="image-container">
                                    <img style={{border: "2px solid green"}} src={updated} alt="Sidebar with new annotation in it"/>
                                </div>
                            </ul>
                        </li>
                        <li>
                            The Adamite extension badge in the Chrome navigation bar will also update to show how many annotations are on the current page - it should now say “2” if you annotated this page! If you happen to visit a page that has some annotations on it, the Adamite badge will update - make sure you check out what other users have annotated!
                            <div className="image-container">
                                    <img style={{border: "2px solid green"}} src={badge} alt="Adamite badge with text that says '1'"/>
                                </div>  
                        </li>

                    </ol>
                    <p>
                       Since we now know how to create annotations, let's learn how to share them with our collaborators.
                    </p>
                </div>
                
            </div>
            
            
        </div>
    )


}

export default InstallationGuide;