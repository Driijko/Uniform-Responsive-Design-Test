import UniformResponse from "../../Responsive/UniformResponse/UniformResponse";

import Layer0 from "../1 Layers/Layer0";
import GutterTemplate from "../1 Layers/GutterTemplate";
import Layer2 from "../1 Layers/Layer2";
import Layer from "../1 Layers/LayerTemplate/Layer";

export default function HomePage(props) {
    return (
        <UniformResponse>
            <Layer />
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    )
}