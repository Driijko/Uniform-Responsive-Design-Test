import {hor, ver} from "../../../settings";
import styleElement from "../styleElement";

export default function Header({width}) {
    console.log(width);

    const styles = {
        h1: {
            // boxSizing: "border-box",
            // border: "5px solid white",

            fontSize: `${width/9}px`,
            textAlign: "center",
        },
        navLink: {
            // boxSizing: "border-box",
            // border: "3px solid white",

            textDecoration: "none",
            fontSize: `${width / 10}px`,
            textAlign: "center",
            color: "orange",
        }
    };

    return (
        <header>
            <h1 style={styleElement(0, 1, 20, 3, styles.h1)}>
                Modern Art
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="" style={styleElement(0, 9, 20, 2, styles.navLink)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" style={styleElement(0, 12, 20, 2, styles.navLink)}>
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="" style={styleElement(0, 15, 20, 2, styles.navLink)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" style={styleElement(0, 18, 20, 2, styles.navLink)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}