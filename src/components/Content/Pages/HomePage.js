import UniformResponse from "../../UniformResponse/UniformResponse";

import Layer0 from "../Layers/Layer0";
import Layer1 from "../Layers/Layer1";

export default function HomePage(props) {
    return (
        <UniformResponse>
            <Layer0 />
            <Layer1 />
        </UniformResponse>
    )
}