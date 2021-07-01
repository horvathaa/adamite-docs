import React, { useState } from 'react';
import './Description.css';

import createGroup from '../assets/create-group.PNG';
import createGroupCtd from '../assets/create-group-ctd.png';
import groupAnnotation from '../assets/group-annotation.png';
import questionBefore from '../assets/question-before.png';
import questionAfter from '../assets/question-after.png';
import selectGroupCreateAnno from '../assets/select-group-create-anno.png';
import selectGroupFromGroup from '../assets/select-group-from-groups.png';

const GroupsGuide = () => {
    return (
        <div>
            <div className="sub-header">Groups
                <div className="sub-sub-header" id="installation">
                    Creating a Group
                </div>
                <div className="adamite-description">
                    One feature of Adamite is sharing annotations with groups of developers. By default, Adamite supports public annotations and private annotations, where public annotations are viewable by anyone and private annotations are only viewable by you, the author.
                    You can create groups of users to share annotations with only your collaborators. To create a group, select "Create New Group" from the sandwich menu.
                    <div className="img-container">
                        <img src={createGroup} style={{border: "2px solid green"}} alt="create group in dropdown menu" />
                    </div>
                    When you select "Create New Group", a modal will pop up which allows you to make a new for your group, set a description, and add users to the group. Note that the email MUST be the email your collaborator is using with Adamite.
                    <div className="img-container">
                        <img src={createGroupCtd} style={{border: "2px solid green"}} alt="create group in dropdown menu" />
                    </div>
                </div>

            
            </div>

        </div>
    )
}

export default GroupsGuide;