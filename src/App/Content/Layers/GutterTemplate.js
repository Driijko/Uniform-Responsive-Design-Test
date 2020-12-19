export default function GutterTemplate({type, middle, side}) {
    const style = {
        position: "absolute",
        left: "0px",
        top: "0px",
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
        backgroundColor: "purple",
    };

    return (
        <div style={style}></div>
    )
}