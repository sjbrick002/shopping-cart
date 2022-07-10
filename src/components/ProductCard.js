import { useState } from "react";

export default function ProductCard(props) {
    let {image, imageAlt, productName, productQuantity} = props;
    let [quantity, setQuantity] = useState(productQuantity);
    function handleChange(e) {
        e.target.value = quantity;
    };
    function addPie() {
        setQuantity(quantity + 1);
    };
    function removePie() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        };
    };
    return (
        <div>
            <img src={image} alt={imageAlt} />
            <p>{productName}</p>
            <div>
                <label htmlFor="input">Quantity:</label>
                <div>
                    <button onClick={removePie}>-</button>
                    <input onChange={handleChange} type="number" value={quantity} id="input"/>
                    <button onClick={addPie}>+</button>
                </div>
            </div>
        </div>
    );
};