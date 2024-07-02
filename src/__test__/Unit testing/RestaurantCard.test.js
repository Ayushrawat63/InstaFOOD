import { render, screen } from "@testing-library/react"
import RestaurantCard from "../../Components/FunctionalComponents/RestaurantCard"
import MOCK_DATA from "../../Mocks/RestaurantCardMock.json"

import "@testing-library/jest-dom"

test("test for Resturancard",()=>{
    render(<RestaurantCard data={MOCK_DATA}/>) 

    const name=screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
})