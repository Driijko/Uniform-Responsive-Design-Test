import {hor, ver} from "../settings";
import styled, {css} from "styled-components";

function positioning(coords) {
    return `
        position: absolute;
        left: ${hor[coords[0]]}%;
        top: ${ver[coords[1]]}%;
        width: ${hor[coords[2]]}%;
        height: ${ver[coords[3]]}%; 
    `;
}

const StyledH1 = styled.h1`${props=>css`
    ${positioning(props.spatial)}
    font-size: ${props.width / 8}px;
    text-align: center;
`}`;

const StyledNavLink = styled.a`${props=>css`
    ${positioning(props.spatial)}
    font-size: ${props.width / 8}px;
    text-align: center;
    color: ${props.focus? "white" : "orange"};
    cursor: pointer;
    ${props.focus?
        "background-color: maroon"
        : ""
    }
`}`;

export {StyledH1, StyledNavLink};