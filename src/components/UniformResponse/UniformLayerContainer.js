import styled, {css} from "styled-components";

const UniformLayerContainer = styled.div`${props => css`
    box-sizing: border-box;
    width: ${props.width}px;
    height: ${props.height}px;

    background-color: black;
    color: white;
`}`;

export default UniformLayerContainer;