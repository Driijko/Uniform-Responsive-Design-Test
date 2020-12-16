import {useState, useEffect} from "react";

import UniformLayerContainer from "./UniformLayerContainer";

export default function UniformResponse(props) {

    // Fundamental Aspect Ratio ///////////////////////////////////////////////
    const ratioWidth = 2;
    const ratioHeight = 3;

    // STATE ////////////////////////////////////////////////////
    const [layerContainerWidth, setLayerContainerWidth] = useState(null);
    const [layerContainerHeight, setLayerContainerHeight] = useState(null);

    function calculateLayerContainerSize() {
        const ratio = ratioWidth / ratioHeight;

        if (ratio <= 1) {
            if (window.innerWidth <= window.innerHeight) {
                setLayerContainerWidth(window.innerWidth);
                setLayerContainerHeight(window.innerWidth * (ratioHeight/ratioWidth));
            }
            else {
                setLayerContainerHeight(window.innerHeight);
                setLayerContainerWidth(window.innerHeight * (ratioWidth/ratioHeight));
            }
        }
    }

    // This makes sure we calculate the layer container size on first render.
    useEffect(()=> {
        calculateLayerContainerSize();
    },[])

    // EVENT HANDLERS ////////////////////////////////////////////
    window.addEventListener("resize", () => {
        calculateLayerContainerSize();
    });

    // RENDER ///////////////////////////////////////////////////
    return (
        <div>
            <p>Window Width: {String(window.innerWidth)}</p>
            <p>Window Height: {String(window.innerHeight)}</p>
            <UniformLayerContainer 
                width={layerContainerWidth}
                height={layerContainerHeight}
            >
            </UniformLayerContainer>
        </div>
    )
    
}