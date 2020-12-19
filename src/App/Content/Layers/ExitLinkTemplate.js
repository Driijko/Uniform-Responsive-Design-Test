import {useState} from "react";

import {Redirect} from "react-router-dom";

function ExitLink(props) {

    const [exit, setExit] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        const timerId = setTimeout(() => {
            setExit(true);
            clearTimeout(timerId);
        }, 2000)
    }

    return (
        exit ? 
            <Redirect to="/page1" />
            : <a href="" onClick={handleClick}>Page 1</a>
    )
}