import UniformResponse from "../../Responsive/UniformResponse/UniformResponse";

import Layer0 from "../Layers/Layer0";
import GutterTemplate from "../Layers/GutterTemplate";
import Layer2 from "../Layers/Layer2";
import Layer from "../Layers/LayerTemplate/Layer";

export default function HomePage(props) {
    return (
        <UniformResponse>
            <Layer />
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    )
}