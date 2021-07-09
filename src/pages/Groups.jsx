import React from 'react';
import './Description.css';

import createGroup from '../assets/create-group.PNG';
import createGroupCtd from '../assets/create-group-ctd.png';
import groupAnnotation from '../assets/group-annotation.png';
import question from '../assets/question.png';
import selectGroupCreateAnno from '../assets/select-group-create-anno.png';
import selectGroupFromGroup from '../assets/select-group-from-groups.png';

const GroupsGuide = () => {
    return (
        <div>
            <div className="sub-header">Groups
                <div className="sub-sub-header">
                    Creating a Group
                </div>
                <div className="adamite-description">
                        One feature of Adamite is sharing annotations with groups of developers. By default, Adamite supports public annotations and private annotations, where public annotations are viewable by anyone and private annotations are only viewable by you, the author.
                        You can create your own group of users to share annotations with. To create a group, select "Create New Group" from the sandwich menu.
                    <div className="img-container">
                        <img src={createGroup} style={{border: "2px solid green"}} alt="create group in dropdown menu" />
                    </div>
                        When you select "Create New Group", a modal will pop up which allows you to choose a name for your group, set a description, and add users to the group. Note that the email MUST be the email your collaborator is using with Adamite.
                        In this example, I am creating a group for Visual Studio Code Developers and, aside from myself, have invited "bam@cs.cmu.edu" as a member. Once you have filled in all of the information, click "Create".
                    <div className="img-container">
                        <img src={createGroupCtd} style={{border: "2px solid green"}} alt="create group modal" />
                    </div>
                    <br />
                    <br />
                <div className="sub-sub-header">
                    Group Annotations
                </div>
                        Upon creating your group, you can create annotations that are shared with that group. To share an annotation, select the group name from the "Post to" dropdown.
                    <div className="img-container">
                        <img src={selectGroupCreateAnno} style={{border: "2px solid green"}} alt="choose group in annotation dropdown menu" />
                    </div>
                        When you've created your group annotation, you will see the group name by the author name and creation date.
                    <div className="img-container">
                        <img src={groupAnnotation} style={{border: "2px solid green"}} alt="group annotation" />
                    </div>
                        Other users in your group can see your annotations and interact with them, such as in this example where Brad Myers answers my question about a Visual Studio Code extension feature.
                        Likewise, you can see your teammates' annotations.
                    <div className="img-container">
                        <img src={question}  alt="question and answer group annotation" />
                    </div>
                        You can view all annotations that are in a group by selecting that group name from the groups dropdown at the top of the sidebar.
                        In this case, I've chosen the "VS Code Extension Developers" group.
                    <div className="img-container">
                        <img src={selectGroupFromGroup} style={{border: "2px solid green"}}  alt="group dropdown" />
                    </div>
                    <p>
                        Now, let's discuss the sidebar in more depth.
                    </p>
                </div>

            
            </div>

        </div>
    )
}

export default GroupsGuide;