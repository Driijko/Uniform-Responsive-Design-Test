import {hor, ver} from "../settings";
import styled, {css} from "styled-components";

const $h1 = styled.h1`${props=>css`
    position: absolute;
    left: ${hor[props.spatial[0]]}%;
    top: ${ver[props.spatial[1]]}%;
    width: ${hor[props.spatial[2]]}%;
    height: ${ver[props.spatial[3]]}%;
    font-size: ${props.width / 8}px;
    text-align: center;
`}`;

const $navLink = styled.a`${props=>css`
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

export {$h1, $navLink};

// function styleElement(left, top, width, height, obj) {
//     const result = {...obj};
//     result.position = "absolute";
//     result.left = `${hor[left]}%`;
//     result.top = `${ver[top]}%`;
//     result.width = `${hor[width]}%`;
//     result.height = `${ver[height]}%`;

//     return result;   
// }

// const h1 = {
//         // boxSizing: "border-box",
//         // border: "5px solid white",

//         fontSize: `${width/9}px`,
//         textAlign: "center",
// };

// const navLink = {
//         // boxSizing: "border-box",
//         // border: "3px solid white",

//         textDecoration: "none",
//         fontSize: `${width / 10}px`,
//         textAlign: "center",
//         color: "orange",
// };

// export {styleElement, h1, navLink};