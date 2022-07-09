import { screen, render } from "@testing-library/react"
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

describe("Nav component", () => {
    it("renders a number of list items equal to the array length of the passed pages prop", () => {
        let pages = ["Home", "Shop", "Checkout"];
        render(
            <BrowserRouter>
                <Nav pages={pages}/>
            </BrowserRouter>
        );
        expect(screen.getAllByRole("listitem").length).toEqual(pages.length)
    });
});