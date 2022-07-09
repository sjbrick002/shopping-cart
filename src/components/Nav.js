export default function Nav(props) {
    let pagesArray = props.pages;
    return (
        <nav>
            <ul>
                {pagesArray.map(page => <li key={page.toLowerCase()}>{page}</li>)}
            </ul>
        </nav>
    );
};