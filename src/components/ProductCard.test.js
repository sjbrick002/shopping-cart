import { screen, render } from "@testing-library/react";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

describe("ProductCard component", () => {
    it("adds one unit to input value when '+' button is pressed", () => {
        render(<ProductCard image={null} imageAlt={"Pie"} productName={"Great Pie"} productQuantity={0} />);
        let addButton = screen.getByRole("button", {name: "+"});
        let input = screen.getByDisplayValue("0");

        userEvent.click(addButton);

        expect(input.value).toBe("1");
    });

    it("removes one unit from input value when '-' button is pressed and the input value is greater than 0", () => {
        render(<ProductCard image={null} imageAlt={"Pie"} productName={"Great Pie"} productQuantity={11} />);
        let removeButton = screen.getByRole("button", {name: "-"});
        let input = screen.getByDisplayValue("11");

        userEvent.click(removeButton);

        expect(input.value).toBe("10");
    });

    it("updates product quantity when the user types in the quantity input", () => {
        render(<ProductCard image={null} imageAlt={"Pie"} productName={"Great Pie"} productQuantity={0} />);
        let input = screen.getByDisplayValue("0");

        userEvent.type(input, "3");

        expect(input.value).toBe("3");
    });
});