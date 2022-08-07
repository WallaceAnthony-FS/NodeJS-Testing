

describe("Math Object", () => {
    
    test("Should take in 2 numbers and return the sum", () => {
        expect(add(2, 3)).toBe(5)
    })

    test("Should take in 2 parameters and return the difference", () => {
        expect(subtract(9, 4)).toBe(5)
    })
    
    test("Should take in 2 numbers and return the product", () => {
        expect(multiply(3, 4)).toBe(12)
    })

    test("Should take in 2 parameters and return the quotient", () => {
        expect(divide(15, 5)).toBe(3)
    })

    test("Should take in a number and return the square root", () => {
        expect(squareRoot(144)).toBe(12)
    })

    test("Should take in 2 parameters and return the max", () => {
        expect(max(7, 12)).toBe(12)
    })

})
