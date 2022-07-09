import Nav from "./Nav";

export default function Home(props) {
    return (
        <div>
            <Nav pages={props.pages} />
            <p>This is Home</p>
        </div>
    );
};