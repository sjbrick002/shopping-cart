import Nav from "./Nav";

export default function Shop(props) {
    return (
        <div>
            <Nav pages={props.pages} />
            <p>This is the Shop</p>
        </div>
    );
};