import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "..";

it("capitalized",()=>{
    expect(capitalize("evil")).toBe("Evil");
})

it("reversed string",()=>{
    expect(reverseString("evil")).toBe("live");
})

it("calculator add",()=>{
    expect(calculator.add(3,2)).toBe(5);
})

it("calculator substract",()=>{
    expect(calculator.substract(3,2)).toBe(1);
})

it("calculator divide",()=>{
    expect(calculator.divide(3,2)).toBe(1.5);
})

it("calculator multiply",()=>{
    expect(calculator.multiply(3,2)).toBe(6);
})

it("caesars cipher shift",()=>{
    expect(caesarCipher("xyz",3)).toBe("abc");
})

it("caesars case preservation",()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
})

it("caesars punctuation preservation",()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
})

it("analyze array average",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        average: 4
    }));
})

it("analyze array min",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        min: 1
    }));
})

it("analyze array max",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        max: 8
    }));
})

it("analyze array length",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        length: 6
    }));
})