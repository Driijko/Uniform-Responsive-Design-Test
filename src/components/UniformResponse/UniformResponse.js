import {useState, useEffect} from "react";
import styled, {css} from "styled-components";

import UniformLayerContainer from "./UniformLayerContainer";

export default function UniformResponse(props) {

    // Fundamental Aspect Ratio ///////////////////////////////////////////////
    const ratioWidth = 2;
    const ratioHeight = 3;
    const ratio = ratioWidth / ratioHeight;

    // STATE ///////////////////////////////////////////////////////////////////////

    // Size -------------------------------------------------------------------
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // Layer Containers ------------------------------------------------------
    const [layerContainerWidth, setLayerContainerWidth] = useState(null);
    const [layerContainerHeight, setLayerContainerHeight] = useState(null);

    function calculateLayerContainerSize() {

        if (ratio <= 1) {
            const width = Math.min(
                window.innerWidth,
                Math.round(window.innerHeight * (ratioWidth/ratioHeight)) 
            );
            setLayerContainerWidth(width);
            setLayerContainerHeight(Math.round(width * (ratioHeight/ratioWidth)));
        }
        else {
            const height = Math.min(
                window.innerHeight,
                Math.round(window.innerWidth * (ratioHeight/ratioWidth))
            );
            setLayerContainerHeight(height);
            setLayerContainerWidth(Math.round(height * (ratioWidth/ratioHeight)));
        }
    }

    // This makes sure we calculate the layer container size on first render.
    useEffect(()=> {
        calculateLayerContainerSize();
    },[]);

    // DUAL CONTAINER //////////////////////////////////////////////////////////////
    function setupDualContainer() {
        if (ratio <= 1) {
            if (window.innerWidth > layerContainerWidth * 2) {
                
            }
        }
    }

    // EVENT HANDLERS ////////////////////////////////////////////////////////////
    window.addEventListener("resize", () => {
        calculateLayerContainerSize();
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    });

    // STYLES /////////////////////////////////////////////////////////////////////
    const UniformResponseDiv = styled.div`${props=> css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: ${width}px;
        height: ${height}px;
    `}`;

    // RENDER //////////////////////////////////////////////////////////////////
    return (
        <UniformResponseDiv>
            <UniformLayerContainer 
                width={layerContainerWidth}
                height={layerContainerHeight}
            >
            </UniformLayerContainer>
        </UniformResponseDiv>
    )   
}