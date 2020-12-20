// IMPORTS /////////////////////////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------
import {useState, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

// Import custom hooks ---------------------------------------------
import useKey from "../../../Input/useKey";

// Import components -----------------------------------------------
import NavLink from "../../2 Elements/NavLink";
import StyledH1 from "../../3 Styling/StyledH1"

// Import helpers -------------------------------------------------
import direction from "../../3 Styling/helpers/direction";

// STYLE ///////////////////////////////////////////////////////////////////////////////////////

const enter = `
    opacity: 0;
`

const steady = `
    opacity: 1;
`

const LayerDiv = styled("div")`${props=>css`
    position: absolute;
    box-sizing: border-box;
    width: ${props.width}px;
    height: ${props.height}px;
    background-color: red;
    animation: ${direction(enter, steady)} ${enterTime}s ease-out forwards;
`}`

// SETTINGS ///////////////////////////////////////////////////////////////////////////////////
const maxFocusableElements = 5;
const enterTime = 4;

// MAIN COMPONENT /////////////////////////////////////////////////////////////////////////////
export default function Layer({width, height, children}) {

    // STATE /////////////////////////////////////////////////////////////////////////////////

    // Phase ------------------------------------------------------
    const [phase, setPhase] = useState("enter");

    const timerId = setTimeout(() => {
        setPhase("steady");
        clearTimeout(timerId);
    }, enterTime * 1000);

    
    // Focus -------------------------------------------------------
    const [tabIndex, setTabIndex] = useState(0);

    // 'useKey' returns true if key is held down.
    const tab = useKey("Tab");

    useEffect(()=> {
        if (tab) {
            if (tabIndex === maxFocusableElements) {
                setTabIndex(1);
            }
            else {
                setTabIndex(tabIndex + 1);
            }
        }
    },[tab]);

    // RENDER //////////////////////////////////////////////////////////////////////////////////
    return (
        <LayerDiv width={width} height={height}>          
            <header>
                <StyledH1 spatial={[0, 2, 20, 3]} width={width}>
                    Modern Art
                </StyledH1>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                spatial={[0, 9, 20, 3]}     
                                width={width}
                                focus={tabIndex === 1}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                spatial={[0, 12, 20, 3]} 
                                width={width}
                                focus={tabIndex === 2}
                            >
                                Articles
                            </NavLink>
                        </li>
                            <NavLink 
                                spatial={[0, 15, 20, 3]} 
                                width={width}
                                focus={tabIndex === 3}
                            >
                                About
                            </NavLink>
                        <li>
                            <NavLink 
                                spatial={[0, 18, 20, 3]} 
                                width={width}
                                focus={tabIndex === 4}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                spatial={[0, 25, 20, 3]}
                                width={width}
                                focus={tabIndex === 5}
                                linkTo={"./page1"}
                            >
                                NavLink
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </LayerDiv>
    );
}