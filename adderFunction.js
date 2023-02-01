function adderFunction(...numbers) {
    // let total = 0;
    // for (const number of numbers) {
    //     total += number;
    // }
    // return total;

    return numbers.reduce((total, number) => total + number, 0);
}

export { adderFunction };

