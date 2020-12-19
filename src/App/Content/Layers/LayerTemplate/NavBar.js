// import styleElement from "../../Styling/styleElement";
import {StyledH1, StyledNavLink} from "../../styling";

export default function Header({width}) {

    return (
        <header>
            <StyledH1 spatial={[0, 2, 20, 3]} width={width}>
                Modern Art
            </StyledH1>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink spatial={[0, 9, 20, 2]} width={width}>
                            Home
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink spatial={[0, 12, 20, 2]} width={width}>
                            Articles
                        </StyledNavLink>
                    </li>
                        <StyledNavLink spatial={[0, 15, 20, 2]} width={width}>
                            About
                        </StyledNavLink>
                    <li>
                        <StyledNavLink spatial={[0, 18, 20, 2]} width={width}>
                            Contact
                        </StyledNavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}