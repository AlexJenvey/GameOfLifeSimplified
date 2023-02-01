// import { verifier } from "./verifier";


// describe("verifier", () => {
//     it("should be return the correct error message when fewer than 8 characters", () => {
//         expect(verifier("ABC")).toBe("Password should be longer than 8 characters");
//     });
//     it("should return a success message when longer than 8 characters", () => {
//         expect(verifier("1234567891111")).toBe("Password meets the minimum length requirement.");
//     });
//     it("should return a success message when exactly 8 characters", () => {
//         expect(verifier("12345678")).toBe("Password meets the minimum length requirement.");
//     });
//     it("should return an error message if all the characters are lower case", () => {
//         expect(verifier(abcdefgh)).toBe("Password should contain at least one upercase letter.");
//     });
// });




import { verifier } from "./verifier";



describe("verifier", () => {
    it("should return the error message when cell is dead", () => {
        expect(verifier(0)).toBe("Cell is dead");

    });
    it("should return the success message when cell is alive", () => {
        expect(verifier(1)).toBe("Cell is alive");
    });
    it("should return the error message when cell is dead", () => {
        expect(verifier(2)).toBe("Cell is dead");
    })
    it("should return the error message when cell is dead", () => {
        expect(verifier(3)).toBe("Cell is dead");
    })
    it("should return the success message when cell is alive", () => {
        expect(verifier(4)).toBe("Cell is alive");
    })
});