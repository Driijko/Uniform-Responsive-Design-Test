// IMPORTS /////////////////////////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------
import {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import styled, {css} from "styled-components";

// Import custom hooks ---------------------------------------------
import useKey from "../../../Input/useKey";

// Import components -----------------------------------------------
import NavLink from "../../2 Elements/NavLink";
import StyledH1 from "../../3 Styling/StyledH1"

// Import helpers -------------------------------------------------
import direction from "../../3 Styling/helpers/direction";

// STYLE ///////////////////////////////////////////////////////////////////////////////////////

const transit = `
    opacity: 0;
`;

const steady = `
    opacity: 1;
`;

function transistion(phase) {
    if (phase === "enter") {
        return css`
            animation: ${direction(transit, steady)} ${enterTime}s ease-out forwards;
        `;
    }
    else if (phase === "exiting" || phase === "exit") {
        return css`
            animation: ${direction(steady, transit)} ${exitTime}s ease-out forwards;
        `;
    }

};

const LayerDiv = styled("div")`${props=>css`
    position: absolute;
    box-sizing: border-box;
    width: ${props.width}px;
    height: ${props.height}px;
    background-color: red;
    ${transistion(props.phase)};
`}`;

// SETTINGS ///////////////////////////////////////////////////////////////////////////////////
const maxFocusableElements = 5;
const enterTime = 4;
const exitTime = 2;

// MAIN COMPONENT /////////////////////////////////////////////////////////////////////////////
export default function Layer({width, height, children}) {

    // STATE /////////////////////////////////////////////////////////////////////////////////

    // Phase ------------------------------------------------------
    const [phase, setPhase] = useState("enter");
    const [leaveTo, setLeaveTo] = useState(null);

    useEffect(()=> {
        const timerId = setTimeout(() => {
            setPhase("steady");
            clearTimeout(timerId);
        }, enterTime * 1000);
    },[]);

    useEffect(()=> {
        if (phase === "exiting") {
            const timerId = setTimeout(()=> {
                setPhase("exit");
                clearTimeout(timerId);
            }, exitTime * 1000);
        }
    },[phase]);

    function triggerExit(to) {
        setLeaveTo(to);
        setPhase("exiting");
    };
    
    // Focus -------------------------------------------------------
    const [tabIndex, setTabIndex] = useState(0);

    // 'useKey' returns true if key is held down.
    const tab = useKey("Tab");
    const enter = useKey("Enter");

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
        <LayerDiv width={width} height={height} phase={phase}>
            {phase === "exit" ?
                <Redirect to={leaveTo}/>
                : null
            }       
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
                                enterSelect={tabIndex === 5 && enter}
                                linkTo={"./page1"}
                                triggerExit={triggerExit}
                            >
                                NavLink
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </LayerDiv>
    );
};