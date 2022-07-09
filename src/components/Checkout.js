import Nav from "./Nav";

export default function Checkout(props) {
    return (
        <div>
            <Nav pages={props.pages} />
            <p>This is the Checkout</p>
        </div>
    );
};