import React from 'react';
import annotationMarkedUp from '../assets/annotation-marked-up.png';
import './Description.css';

const Description = () => {

    return(
        <div className="adamite-description">


            <div className="sub-header">
                <h3>
                What is an annotation in Adamite?
                </h3>
            </div>
            <div className="img-container">
                    <img style={{border: "2px solid green"}} src={annotationMarkedUp} alt='showing annotation with numbers referencing each part of the annotation' />
                </div>

            <div className="breakdown-container">
                
                <div className="image-description">
                    <ol>
                        <li>
                        Name of the <b>annotation author</b> ("ahorvath" in this case), 
                        the <b>group name</b> that the annotation has been published to (with "Private" being a default group that is just yourself), and the <b>date and time</b> the annotation was published at.
                        </li>
                        <li>
                        All of the operations you can perform on an annotation - the speech bubbles are the <b>"reply" button</b> which allows you to reply to an annotation, the "pin" allows you to <b>pin an annotation</b> so that it's always available
                        in a pinned annotation list (this annotation is pinned as shown by the filled-in pin icon), the anchor button allows you to <b>add another anchor</b> to an annotation, the pencil icon allows you to <b>edit</b> an annotation (only available to the original author of an annotation),
                        and the trash can icon is used to <b>delete an annotation</b> (only available to the original author of an annotation). The icon in the top right corner shows the <b>type of annotation</b> with this annotation being a "normal" type.
                        </li>
                        <li>
                            The <b>original text</b>, referred to as an "anchor", on the webpage that has been annotated - clicking the anchor button will scroll to where that text is on the page
                        </li>
                        <li>
                            The <b>user-generated annotation content</b> that is tied to that anchor point.
                        </li>
                        <li>
                            The <b>tag</b> for this annotation - you can the filter annotation list by clicking on the tag name.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="breakdown-container">
                <p>
                    More documentation coming soon!
                </p>
            </div>
        </div>
    );


}

export default Description;