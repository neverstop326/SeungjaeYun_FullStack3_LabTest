

const mixedArray = ['Matrix', 1, true, 2, false, 3];


let filterNumbers = mixedArray.filter(Number.isInteger);

const multiplyNumbers = (filterNumbers) => {
    for (let number of filterNumbers) {
        console.log(number * 5);
    }
};

multiplyNumbers(filterNumbers);
