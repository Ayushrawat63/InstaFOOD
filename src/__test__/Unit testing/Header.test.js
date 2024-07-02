import { fireEvent, render, screen } from "@testing-library/react"

import Header from "../../Components/FunctionalComponents/Header"
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import appStore from "../../Redux/appStore"
import { BrowserRouter } from "react-router-dom"

test("Header Test for Sign btn", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
 
    // const Btn=screen.getByRole("button")

    const Btn =screen.getByText("Sign in")

    expect(Btn).toBeInTheDocument();
})


it("Header Test for cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
 
    // const Btn=screen.getByRole("button")

    const cartItem =screen.getByText("Cart - (0 items)")

    expect(cartItem).toBeInTheDocument();
})


test("Header Test for Sign out btn", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
 
    const Btn=screen.getByRole("button",{name:"Sign in"})
   
    fireEvent.click(Btn)
   
    const Btn2=screen.getByRole("button",{name:"Sign out"})

    expect(Btn2).toBeInTheDocument();
})