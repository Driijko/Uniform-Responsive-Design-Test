export default function UniformLayer({width, height, children}) {
    const style = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}