import UniformResponse from "../../Responsive/UniformResponse/UniformResponse";

import GutterTemplate from "../1 Layers/GutterTemplate";
import Layer2 from "../1 Layers/Layer2";
import Layer from "../1 Layers/LayerTemplate/Layer";

// const phaseTiming = {
//     enter: 3,
//     exit: 1,
// };

export default function PageTemplate(props) {

    // If you want to animate each layer according to a single
    // timing specification ...
    // const [phase, setPhase] = useState({
    //     phase: "enter",
    //     phaseTiming: phaseTiming["enter"],
    // });

    // Two components within the Uniform Response component
    // signal a single layer with gutter.
    // Three components signals to use the dual container
    // option, window size permitting.
    // Ordering matters: primary layer, gutter, secondary layer
    return (
        <UniformResponse>
            <Layer />
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    );
};