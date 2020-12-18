export default function Test({width, height, children}) {

    const style1 = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "black",
        color: "white",
    };

    const style2 = {
        fontSize: `${width / 20}px`,
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "60%",
        height: "20%",
        boxSizing: "border-box",
        border: "5px solid red",
    }
    return (
        <div style={style1}>
            <h1 style={style2}>Hello World</h1>
        </div>
    )
}