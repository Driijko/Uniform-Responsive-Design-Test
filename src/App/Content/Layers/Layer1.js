export default function Layer0({width, height, children}) {
    const style = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "purple",
    };
    return (
        <div style={style}>
            <h1>...bye bye!</h1>
        </div>
    )
}