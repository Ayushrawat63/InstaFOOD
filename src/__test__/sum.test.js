import sum from "../Components/FunctionalComponents/sum"


test("sum of two no. is: ",()=>{
    const result=sum(3,4);

    expect(result).toBe(7);
})