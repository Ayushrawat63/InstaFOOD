import {render, screen} from "@testing-library/react"
import ContactUs from "../../Components/FunctionalComponents/ContactUs"

import '@testing-library/jest-dom'

describe("all contact page test",()=>{
    
it(" should load Heading  in the Contact component", ()=>{
    render(<ContactUs/>)
    const heading=screen.getByRole("heading")
    //Assertion
    expect(heading).toBeInTheDocument(); 
})

it("should load Button in the Contact Component",()=>{
    render(<ContactUs/>)
    // const button=screen.getByRole('button')
                    //or
    const button=screen.getByText('submit')
    //Assertion
    expect(button).toBeInTheDocument();
})

test("should load input in the Contact Component",()=>{
    render(<ContactUs/>)
    // const button=screen.getByRole('button')
                    //or
    const input=screen.getByPlaceholderText("your name")
    //Assertion
    expect(input).toBeInTheDocument();
})

test("show all the input in the contact component",()=>{
    render(<ContactUs/>)

    const allInput=screen.getAllByRole("textbox");
    // console.log(allInput);
    const length=allInput.length;
    //assertion
    expect(length).toBe(2)
})
}

)
