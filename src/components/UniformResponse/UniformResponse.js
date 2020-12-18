import React, {useState, useEffect} from "react";

import ContainerGrid from "./ContainerGrid";
import LayerContainer from "./LayerContainer";

import WindowResize from "./WindowResize";

export default function UniformResponse({children}) {

    // FUNDAMENTAL SETTINGS ///////////////////////////////////////////////
    const ratioWidth = 2;
    const ratioHeight = 3;
    const ratio = ratioWidth / ratioHeight;
    const gapRatio = 1;

    // STATE ///////////////////////////////////////////////////////////////////////

    // Styled Div Size ----------------------------------------------------------
    const [width] = useState(window.innerWidth);
    const [height] = useState(window.innerHeight);

    // Layer Containers ------------------------------------------------------
    const [layerContainerSize] = useState(calcLayerContainerSize());
    const [secondaryContainer, setSecondaryContainer] = useState(false);

    function calcLayerContainerSize() {
        const layerContainer = {
            width: null,
            height: null,
        };

        if (ratio <= 1) {
            layerContainer.width = Math.min(
                window.innerWidth,
                window.innerHeight * (ratioWidth / ratioHeight)
            );
            layerContainer.height = layerContainer.width * (ratioHeight / ratioWidth);
            return layerContainer;
        }
        else {
            layerContainer.height = Math.min(
                window.innerHeight,
                window.innerWidth * (ratioHeight / ratioWidth)
            );
            layerContainer.width = layerContainer.height * (ratioWidth / ratioHeight);
            return layerContainer;
        }
    }

    // Dual Container --------------------------------------------------------
    function calcGrid() {
        const grid = {
            colNum: 1,
            rowNum: 1,
            gap: 0,
        };

        const dualWidth = layerContainerSize.width * 2;
        const dualHeight = layerContainerSize.height * 2;

        if (ratio <= 1 && window.innerWidth > dualWidth) {
            grid.colNum = 2;
            grid.gap = (window.innerWidth - dualWidth) / gapRatio;                
        }
        else if (ratio > 1 && window.innerHeight > dualHeight){
            grid.row = 2;
            grid.gap = (window.innerHeight - dualHeight) / gapRatio;
        }

        return grid;
    }

    const [grid] = useState(calcGrid());

    // If our grid settings change, we make sure to respond appropriately
    // checking to see if we should have a second layer container
    useEffect(()=> {
        setSecondaryContainer(grid.colNum === 2 || grid.rowNum === 2);
    }, [grid]);

    // EVENT HANDLERS //////////////////////////////////////////////////////////

    // Refreshes the page after (delay) milliseconds.
    const delay = 2000;
    WindowResize(delay);

    // STYLES ////////////////////////////////////////////////////////////////////
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: `${width}px`,
        height: `${height}px`,
    }

    // CHILDREN ///////////////////////////////////////////////
    // Here we add props to the child elements, aka uniform layers
    const uniformLayers = React.Children.map(children, child => {
        return React.cloneElement(child, {
            width: layerContainerSize.width,
            height: layerContainerSize.height,
        });
    });

    // RENDER //////////////////////////////////////////////////////////////////
    return (
        <div style={style}>
            <ContainerGrid
                colNum={grid.colNum}
                rowNum={grid.rowNum}
                gap={grid.gap}
            >
                <LayerContainer
                    width={layerContainerSize.width}
                    height={layerContainerSize.height}
                >
                    {uniformLayers[0]}
                </LayerContainer>
                {
                    secondaryContainer ?
                    <LayerContainer
                        width={layerContainerSize.width}
                        height={layerContainerSize.height}
                    >
                        {uniformLayers[1]}
                    </LayerContainer>
                    : null
                }
            </ContainerGrid>
        </div>
    ) 
}