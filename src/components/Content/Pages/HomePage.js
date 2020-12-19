import UniformResponse from "../../UniformResponse/UniformResponse";

import Layer0 from "../Layers/Layer0";
import GutterTemplate from "../Layers/GutterTemplate";
import Layer2 from "../Layers/Layer2";

export default function HomePage(props) {
    return (
        <UniformResponse>
            <Layer0 />
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    )
}