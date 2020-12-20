import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";

const StyledH1 = styled.h1`${props=>css`
    ${positioning(props.spatial)}
    font-size: ${props.width / 8}px;
    text-align: center;
`}`;

export default StyledH1;