import React from 'react';
import sidebarMarkedUp from '../assets/sidebar-annotated.png';
import './Description.css';

const SidebarDescription = () => {

    return(
        <div className="adamite-description">

            <div className="sub-header">
                What is the sidebar in Adamite?
            </div>

            <div className="breakdown-container">
                <div className="image-container">
                    <img src={sidebarMarkedUp} alt='showing sidebar with numbers referencing each part of the sidebar' />
                </div>
                <div className="image-description">
                    <ol>
                        <li>
                            Name of the <b>logged-in user</b> ("documentation" in this case) - users can log out by hovering over the user icon. Users can also create a <b>page-level annotation</b> by clicking on the 
                            <b>document icon</b>, where a page level annotation can be used for annotating information that is relevant to the whole web page.
                        </li>
                        <li>
                            The <b>search bar</b> can be used to search for annotations - annotations can be searched globally, on the website, or on the page. Searched for annotations will match on anchor content, annotation content,
                            and tags. 
                        </li>
                        <li>
                            Filters that will change the set of currently-viewable annotations in the sidebar. The <b>groups filter</b> sets the sidebar to show annotations that are in that group, with the default groups being public and private.
                            The <b>time filter</b> can be used to filter out older annotations, with the default state set to show annotations that were created at any time. The <b>annotation type</b> filter
                            sets which annotation type is currently viewable in the sidebar. The number in the bottom right corner shows <b>how many annotations are viewable</b> in the sidebar.
                        </li>
                        <li>
                            The button to show the user's <b>list of pinned annotations</b>. If a user has no pinned annotatinos, this button will not appear.
                        </li>
                        <li>
                            The <b>list of currently-viewable annotations</b>. By default will show all annotations authored on that page that are public, or are private and were authored by the logged-in user.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );


}

export default SidebarDescription;