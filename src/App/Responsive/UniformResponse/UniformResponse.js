import {Children, cloneElement, useState, useEffect} from "react";

import ContainerGrid from "./ContainerGrid";
import LayerContainer from "./LayerContainer";

import WindowResize from "../WindowResize";

import {ratioWidth, ratioHeight, ratio, gapRatio} from "../../settings";

export default function UniformResponse({children}) {

    // STATE ///////////////////////////////////////////////////////////////////////

    // Styled Div Size ----------------------------------------------------------
    const [width] = useState(window.innerWidth);
    const [height] = useState(window.innerHeight);

    // Layer Containers ------------------------------------------------------
    const [layerContainerSize] = useState(calcLayerContainerSize());

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

    // Container Grid --------------------------------------------------------
    const [secondaryContainer, setSecondaryContainer] = useState(false);
    const [grid] = useState(calcGrid());

    function calcGrid() {

        const grid = {
            colNum: 1,
            rowNum: 1,
            gap: 0,
            gutters: {
                type: null,
                side: 0,
            },
        };

        // If UniformResponse only receives 2 children, it defaults to assuming
        // that a secondary container is not desired.
        const isTwoContainers = Children.count(children) === 3;

        if (ratio <= 1) {

            grid.gutters.type = "vertical";

            const dualWidth = layerContainerSize.width * 2;
            const remainingWidth = window.innerWidth - dualWidth;

            if (isTwoContainers && window.innerWidth > dualWidth) {
                grid.colNum = 2;
                if (gapRatio > 1) {
                    grid.gap = remainingWidth / gapRatio;
                    grid.gutters.side = (remainingWidth - grid.gap) / 2;
                }
                else {
                    grid.gap = remainingWidth;
                }
            }
            else {
                grid.gutters.side = remainingWidth / 2;
            }
        }
        else {

            grid.gutters.type = "horizontal";

            const dualHeight = layerContainerSize.height * 2;
            const remainingHeight = window.innerHeight - dualHeight;

            if (isTwoContainers && window.innerHeight > dualHeight) {
                grid.rowNum = 2;
                if (gapRatio > 1) {
                    grid.gap = remainingHeight / gapRatio;
                    grid.gutters.side = (remainingHeight - grid.gap) / 2;
                }
                else {
                    grid.gap = remainingHeight;
                }
            }
            else {
                grid.gutters.side = remainingHeight / 2;
            }
        }

        return grid;
    }

    // If our grid settings change, we make sure to respond appropriately
    // checking to see if we should have a second layer container
    useEffect(()=> {
        setSecondaryContainer(grid.colNum === 2 || grid.rowNum === 2);
    }, [grid]);


    // EVENT HANDLERS //////////////////////////////////////////////////////////

    // Refreshes the page after (delay) milliseconds.
    WindowResize();

    // STYLES ////////////////////////////////////////////////////////////////////
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: `${width}px`,
        height: `${height}px`,
    }

    // CHILDREN PROPS ////////////////////////////////////////////////////////////////
    // Here we add props to the child elements, aka uniform layers
    const layers = Children.map(children, (child, index) => {
        if (index === 0 || index === 2) {
            return cloneElement(child, {
                width: layerContainerSize.width,
                height: layerContainerSize.height,
            });
        }
        else {
            return cloneElement(child, {
                type: grid.gutters.type,
                middle: grid.gap,
                side: grid.gutters.side,
            });
        }
    });

    // RENDER //////////////////////////////////////////////////////////////////
    return (
        <div style={style}>
            {layers[1]}
            <ContainerGrid
                colNum={grid.colNum}
                rowNum={grid.rowNum}
                gap={grid.gap}
            >
                <LayerContainer
                    width={layerContainerSize.width}
                    height={layerContainerSize.height}
                >
                    {layers[0]}
                </LayerContainer>
                {
                    secondaryContainer ?
                    <LayerContainer
                        width={layerContainerSize.width}
                        height={layerContainerSize.height}
                    >
                        {layers[2]}
                    </LayerContainer>
                    : null
                }
            </ContainerGrid>
        </div>
    ) 
}