import {useState, useEffect} from "react";

import StyledNavLink from "../3 Styling/StyledNavLink";

export default function NavLink({children, spatial, width, focus, selected, linkTo, triggerExit}) {

    // HIGHLIGHTING //////////////////////////////////////////////////////////////////////

    const [highlight, setHighlight] = useState(null);

    useEffect(()=> {
        if (focus) {
            setHighlight(true);
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
            {children}
        </StyledNavLink>
    );
    
};