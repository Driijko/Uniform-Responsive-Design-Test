import NavBar from "./NavBar";

export default function Layer({width, height, children}) {
    const style = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "red",
    };

    return (
        <div style={style}>
            <NavBar width={width}/>
        </div>
    )
}