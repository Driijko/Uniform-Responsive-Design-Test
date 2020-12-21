import {useState} from "react";

import UniformResponse from "../../Responsive/UniformResponse/UniformResponse";

import Layer0 from "../1 Layers/Layer0";
import GutterTemplate from "../1 Layers/GutterTemplate";
import Layer2 from "../1 Layers/Layer2";
import Layer from "../1 Layers/LayerTemplate/Layer";

const phaseTiming = {
    enter: 3,
    exit: 1,
};

export default function PageTemplate(props) {

    // If you want to animate each layer according to a single
    // timing specification ...
    // const [phase, setPhase] = useState({
    //     phase: "enter",
    //     phaseTiming: phaseTiming["enter"],
    // });

    return (
        <UniformResponse>
            <Layer />
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    );
};