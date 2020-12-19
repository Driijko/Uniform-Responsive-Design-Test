export default function Layer2({width, height, children}) {
    const style = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "green",
    };
    return (
        <div style={style}>
            <h1>Hello World</h1>
        </div>
    )
}