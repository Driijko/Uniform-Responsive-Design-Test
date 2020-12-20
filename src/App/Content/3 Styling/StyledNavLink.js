import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";
import direction from "./helpers/direction"

// HIGHLIGHT ///////////////////////////////////////////////////////

const highlighted = `
    color: white;
    background-color: magenta;
    border: 3px solid white;
`;

const notHighlighted = ``;

function highlight(highlight) {
    if (highlight) {return css`
        animation: ${direction(notHighlighted, highlighted)} 0.25s linear forwards;
    `}
    else {return css`
        animation: ${direction(highlighted, notHighlighted)} 1s linear forwards;
        border: 3px solid rgba(0, 0, 0, 0);
    `}
};

const StyledNavLink = styled.a`${props=>css`
    ${positioning(props.spatial)}
    font-size: ${props.width / 8}px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    color: orange;
    ${highlight(props.highlight)}
`}`;

export default StyledNavLink;

// ${props.focus ?
//     highlight(true)
//     : highlight(false)
// }
// &:hover {${highlight(true)}}
