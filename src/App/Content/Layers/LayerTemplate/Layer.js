// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ---------------------------------------------
import {useState, useEffect} from "react";
import styled, {css} from "styled-components";

// Import custom hooks ---------------------------------------------
import useKey from "../../../Input/useKey";

// Import components -----------------------------------------------
import {StyledH1, StyledNavLink} from "../../styling";

// STYLE ///////////////////////////////////////////////////////////
const LayerDiv = styled("div")`${props=>css`
    position: absolute;
    box-sizing: border-box;
    width: ${props.width}px;
    height: ${props.height}px;
    background-color: red;
`}`

// SETTINGS ////////////////////////////////////////////////////////
const maxFocusableElements = 4;

// MAIN COMPONENT ///////////////////////////////////////////////////
export default function Layer({width, height, phase, children}) {

    // STATE ///////////////////////////////////////////////////////
    // Focus -------------------------------------------------------
    const [tabIndex, setTabIndex] = useState(1);

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

    // RENDER ///////////////////////////////////////////////////////
    return (
        <LayerDiv width={width} height={height}>          
            <header>
                <StyledH1 spatial={[0, 2, 20, 3]} width={width}>
                    Modern Art
                </StyledH1>
                <nav>
                    <ul>
                        <li>
                            <StyledNavLink 
                                spatial={[0, 9, 20, 3]}     
                                width={width}
                                focus={tabIndex === 1}
                            >
                                Home
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink 
                                spatial={[0, 12, 20, 3]} 
                                width={width}
                                focus={tabIndex === 2}
                            >
                                Articles
                            </StyledNavLink>
                        </li>
                            <StyledNavLink 
                                spatial={[0, 15, 20, 3]} 
                                width={width}
                                focus={tabIndex === 3}
                            >
                                About
                            </StyledNavLink>
                        <li>
                            <StyledNavLink 
                                spatial={[0, 18, 20, 3]} 
                                width={width}
                                focus={tabIndex === 4}
                            >
                                Contact
                            </StyledNavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </LayerDiv>
    );
}