import {hor, ver} from "../settings";
import styled, {css} from "styled-components";

const StyledH1 = styled.h1`${props=>css`
    position: absolute;
    left: ${hor[props.spatial[0]]}%;
    top: ${ver[props.spatial[1]]}%;
    width: ${hor[props.spatial[2]]}%;
    height: ${ver[props.spatial[3]]}%;
    font-size: ${props.width / 8}px;
    text-align: center;
`}`;

const StyledNavLink = styled.a`${props=>css`
    position: absolute;
    left: ${hor[props.spatial[0]]}%;
    top: ${ver[props.spatial[1]]}%;
    width: ${hor[props.spatial[2]]}%;
    height: ${ver[props.spatial[3]]}%;
    font-size: ${props.width / 8}px;
    text-align: center;
    color: orange;
    cursor: pointer;
`}`;

export {StyledH1, StyledNavLink};