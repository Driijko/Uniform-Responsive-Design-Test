import {hor, ver} from "../../settings";

export default function Layer0({width, height, children}) {
    const style = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "red",
    };

    const style2 = {
        position: "absolute",
        left: `${hor[0]}%`,
        top: `${ver[5]}%`,
        width: `${hor[20]}%`,
        height: `${ver[3]}%`,
        fontSize: `${width / 20}px`,
        boxSizing: "border-box",

        border: "5px solid blue",
    };

    return (
        <div style={style}>
            <h1 style={style2}>Hello World</h1>
        </div>
    )
}