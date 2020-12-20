import {useState, useEffect} from "react";

import StyledNavLink from "../3 Styling/StyledNavLink";

export default function NavLink({children, spatial, width, focus, linkTo}) {

    // HIGHLIGHTING ////////////////////////////////////////////////

    const [highlight, setHighlight] = useState(false);

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
    }

    function handleMouseLeave() {
        setHighlight(false);
    }

    return (
        <StyledNavLink 
            spatial={spatial}
            width={width}
            highlight={highlight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </StyledNavLink>
    )
    
}