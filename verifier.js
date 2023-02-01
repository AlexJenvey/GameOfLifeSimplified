// function verifier(password) {
//     if (password.length < 8) {
//         return "Password should be longer than 8 characters";
//     } else if (password.length >= 8) {
//         return "Password meets the minimum length requirement.";
//     } else if (password === password.toLowerCase()) {
//         return "Password should contain at least one uppercase letter.";
//     }
// }



// export { verifier }

let testCases = [
    {
        cell: 0,
        neighbors: [0, 1, 0]  //dead
    },
    {
        cell: 1,
        neighbors: [1, 1, 1] //alive
    },
    {
        cell: 0,
        neighbors: [0, 0, 1] //dead
    },
    {
        cell: 0,
        neighbors: [1, 0, 0] //dead
    },
    {
        cell: 1,
        neighbors: [0, 1, 1] //alive
    }
];


function verifier(cell) {
    testCases[cell].cell
    if (testCases[cell].cell === 0) {
        return "Cell is dead"
    } else (testCases[cell].cell === 1)
    return "Cell is alive"
};








export { verifier }