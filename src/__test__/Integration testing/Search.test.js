import { act, fireEvent, render, screen } from "@testing-library/react"
import BodyContent from "../../Components/FunctionalComponents/BodyContent"
import "@testing-library/jest-dom"
import MOCK_DATA from "../../Mocks/RestaurantListMocks.json"
import { BrowserRouter } from "react-router-dom"
// import { act } from "react-dom/test-utils"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("test for search feature with input as Barbeque", async ()=>{
    
    
    await act( async ()=> render(<BrowserRouter><BodyContent/></BrowserRouter>))

    
   

    const SearchBtn= screen.getByRole("button",{name:"Search"})

    const array=screen.getAllByTestId("restCard");

    // console.log(array.length);

   const InputBox=screen.getByTestId("inputBox")

   fireEvent.change(InputBox,{target:{value:"Barbeque"}})

   fireEvent.click(SearchBtn)

 const newArray=screen.getAllByTestId("restCard")

//  console.log(newArray.length)


   
    expect(newArray.length).toBe(2)
})


test("test for topresturant feture",async ()=>{
    await act(async ()=>{render(<BrowserRouter><BodyContent/></BrowserRouter>)} )

    const topRatedbtn=screen.getByRole("button",{name:"top rated restaurants"})
    const restListBeforeClick =screen.getAllByTestId("restCard");

    // console.log(restListBeforeClick.length)

    fireEvent.click(topRatedbtn);

    const restListAfterClick=screen.getAllByTestId("restCard")

//   console.log(restListAfterClick.length)

 


    expect(restListAfterClick.length).toBe(4)


})