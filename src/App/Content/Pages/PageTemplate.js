import {useState} from "react";

import UniformResponse from "../../Responsive/UniformResponse/UniformResponse";

import Layer0 from "../Layers/Layer0";
import GutterTemplate from "../Layers/GutterTemplate";
import Layer2 from "../Layers/Layer2";
import Layer from "../Layers/LayerTemplate/Layer";

const phaseTiming = {
    enter: 3,
    exit: 1,
};

export default function HomePage(props) {
    const [phase, setPhase] = useState({
        phase: "enter",
        phaseTiming: phaseTiming["enter"],
    });

    return (
        <UniformResponse>
            <Layer phase={phase}/>
            <GutterTemplate />
            <Layer2 />
        </UniformResponse>
    )
}