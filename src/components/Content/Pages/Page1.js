import UniformResponse from "../../UniformResponse/UniformResponse";
import Layer2 from "../Layers/Layer2";

export default function Page1(props) {
    return (
        <UniformResponse>
            <Layer2 />
            <Layer2 />
        </UniformResponse>
    )
}