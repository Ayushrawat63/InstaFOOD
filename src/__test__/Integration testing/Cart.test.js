import { act, render, screen } from "@testing-library/react"
import RestaurantMenu from "../../Components/FunctionalComponents/RestaurantMenu"
import MOCK_DATA from "../../Mocks/RestaurantMenuMock.json"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../Redux/appStore"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(MOCK_DATA);
        }
    })
})
// const resInfo = useRestaurantMenu(12345);

it("should Load Restaurant Menu Component", async () => {
    await act(async () => {
        render(

            <BrowserRouter>
                <Provider store={appStore}>
                    {/* <Header /> */}

                    <RestaurantMenu />
                    {/* <Cart /> */}
                </Provider>
            </BrowserRouter>
        )
    }
    )

    const heading=screen.getByRole("heading",{name:"Wow! Momo"})

    expect(heading).toBeInTheDocument()

}
);