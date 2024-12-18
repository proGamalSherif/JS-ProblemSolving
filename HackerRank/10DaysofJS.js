// Task 1 
function greeting(parameterVariable) {
    console.log('Hello, World!');

    console.log(parameterVariable);    
}
// Task 2
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    secondInteger=Number(secondInteger);
    let result = firstInteger + secondInteger;
    console.log(result);
    secondDecimal=parseFloat(secondDecimal);
    let result2 = firstDecimal + secondDecimal;
    console.log(result2);
    console.log(`${firstString+secondString}`);
}
// Task 3
function getArea(length, width) {
    let area = length * width;
    return area;
}
function getPerimeter(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter;
}
// Task 4
function factorial(input){
    let result = 1;
    for(let i = input ; i >= 1 ; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(100));
