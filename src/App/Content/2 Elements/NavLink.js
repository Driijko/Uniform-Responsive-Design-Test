import {useState, useEffect, useContext} from "react";

import StyledNavLink from "../3 Styling/StyledNavLink";

// SFX IMPORTS ///////////////////////////////////////////////////////////
import Audio from "../4 Audio/Audio";
import sfxNavLinkHighlight from "../5 Assets/audio/sfx/navLinkHighlight.mp3";
import sfxNavLinkSelected from "../5 Assets/audio/sfx/navLinkSelected.mp3";

export default function NavLink({children, spatial, width, focus, selected, linkTo, triggerExit}) {

    // SFX ///////////////////////////////////////////////////////////////////////////////
    const [sfx, setSfx] = useState(sfxNavLinkHighlight);

    // HIGHLIGHTING //////////////////////////////////////////////////////////////////////

    const [highlight, setHighlight] = useState(null);

    useEffect(()=> {
        if (focus) {
            setHighlight(true);
            setSfx(sfxNavLinkHighlight);
        }
        else if (highlight === true) {
            setHighlight(false);
        };
    },[focus]);

    function handleMouseEnter() {
        setHighlight(true);
    };

    function handleMouseLeave() {
        setHighlight(false);
    };

    // SELECTION //////////////////////////////////////////////////////////////////////////

    function handleClick() {
        triggerExit(linkTo);
    };

    useEffect(()=> {
        if(selected) {
            triggerExit(linkTo);
            // setSfx(sfxNavLinkSelected);
        }
    },[selected]);

    // RENDER /////////////////////////////////////////////////////////////////////////////

    return (
        <StyledNavLink 
            spatial={spatial}
            width={width}
            highlight={highlight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <Audio 
                filePath={sfx} 
                play={highlight || selected}
            />
            {children}
        </StyledNavLink>
    );
    
};