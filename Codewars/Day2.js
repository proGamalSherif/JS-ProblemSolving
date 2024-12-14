//Problem [1] : Student's Final Grade
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}
//-----------------------------------------
//Problem [2] : Find the divisors!
function divisors(integer) {
    let result = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
        result.push(i); 
        }
    }
    return result.length > 0 ? result : `${integer} is prime`;
}
//-----------------------------------------