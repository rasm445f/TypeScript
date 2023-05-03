
// CLASS EXERCISE 1
function calculate(x, y, operation) {
    return operation(x, y);
}

function add(x, y) {
    return x + y;
}
let result = calculate(3, 4, add);
console.log(result);

// CLASS EXERCISE 2

function calculate(x, y, operation) {
    return new Promise((resolve, reject) => {
        try {
            let result = operation(x, y);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

calculate(3, 4, add)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
// e)
async function calculate2(x, y, operation) {
    try {
        let result = await operation(x, y);
        return result;
    } catch (error) {
        throw error;
    }
}

calculate(4, 4, add)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Class Exercises 3: See weather-app folder
