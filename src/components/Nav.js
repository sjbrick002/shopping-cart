import { Link } from "react-router-dom";

export default function Nav(props) {
    let pagesArray = props.pages;
    return (
        <nav>
            <ul>
                {pagesArray.map(page => 
                    <li key={page.toLowerCase()}>
                        <Link to={`/${page.toLowerCase()}`}>{page}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};