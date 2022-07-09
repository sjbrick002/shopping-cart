import { screen, render } from "@testing-library/react"
import Nav from "./Nav";

describe("Nav component", () => {
    it("renders a number of list items equal to the array length of the passed pages prop", () => {
        let pages = ["Home", "Shop", "Checkout"];
        render(<Nav pages={pages}/>);
        expect(screen.getAllByRole("listitem").length).toEqual(pages.length)
    });
});