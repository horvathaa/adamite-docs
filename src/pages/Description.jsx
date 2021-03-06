import React from 'react';
import annotationMarkedUp from '../assets/annotation-marked-up.png';
import './Description.css';

const Description = () => {

    return(
        <div className="adamite-description">
            Adamite is a web-based annotation tool that allows developers to comment on, question, and keep track of learning resources they find useful or confusing.
            Annotations can be thought of as meta-level "content" that is "anchored" to a specific piece of text.

            <div className="sub-header">
                What is an annotation in Adamite?
            </div>
            <div>
                This is an annotation as it appears in Adamite's sidebar, with numerical markings referring to each part of the annotation. 
            </div>

            <div className="breakdown-container">
                <div className="image-container">
                    <img src={annotationMarkedUp} alt='showing annotation with numbers referencing each part of the annotation' />
                </div>
                <div className="image-description">
                    <ol>
                        <li>
                        Name of the <b>annotation author</b> ("documentation" in this case), 
                        the <b>group name</b> that the annotation has been published to (with "Private" being a default group that is just yourself), and the <b>date and time</b> the annotation was published at.
                        </li>
                        <li>
                        All of the operations you can perform on an annotation - the arrow is the <b>"reply" button</b> which allows you to reply to an annotation, the "pin" allows you to <b>pin an annotation</b> so that it's always available
                        in a pinned annotation list, the anchor button allows you to <b>add another anchor</b> to an annotation, the pencil icon allows you to <b>edit</b> an annotation (only available to the original author of an annotation),
                        and the trash can icon is used to <b>delete an annotation</b> (only available to the original author of an annotation). The icon in the top right corner shows the <b>type of annotation</b> with this annotation being a "normal" type.
                        </li>
                        <li>
                            The <b>original text</b>, referred to as an "anchor", on the webpage that has been annotated - clicking the anchor button will scroll to where that text is on the page
                        </li>
                        <li>
                            The <b>user-generated annotation content</b> that is tied to that anchor point.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );


}

export default Description;