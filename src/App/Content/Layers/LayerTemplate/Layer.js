// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ---------------------------------------------
import {useState, useEffect} from "react";
import styled, {css} from "styled-components";

// Import custom hooks ---------------------------------------------
import useKey from "../../../Input/useKey";

// Import components -----------------------------------------------
import NavBar from "./NavBar";

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
            <NavBar width={width}/>
        </LayerDiv>
    );
}