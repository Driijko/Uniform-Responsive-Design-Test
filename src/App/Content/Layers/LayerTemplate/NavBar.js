// import styleElement from "../../Styling/styleElement";
import {$h1, $navLink} from "../../styling";

export default function Header({width}) {

    return (
        <header>
            <$h1 spatial={[0, 2, 20, 3]} width={width}>
                Modern Art
            </$h1>
            <nav>
                <ul>
                    <li>
                        <$navLink spatial={[0, 9, 20, 2]} width={width}>
                            Home
                        </$navLink>
                    </li>
                    <li>
                        <$navLink spatial={[0, 12, 20, 2]} width={width}>
                            Articles
                        </$navLink>
                    </li>
                        <$navLink spatial={[0, 15, 20, 2]} width={width}>
                            About
                        </$navLink>
                    <li>
                        <$navLink spatial={[0, 18, 20, 2]} width={width}>
                            Contact
                        </$navLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}