// Task 1
function greeting(parameterVariable) {
  console.log("Hello, World!");

  console.log(parameterVariable);
}
// Task 2
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";
  secondInteger = Number(secondInteger);
  let result = firstInteger + secondInteger;
  console.log(result);
  secondDecimal = parseFloat(secondDecimal);
  let result2 = firstDecimal + secondDecimal;
  console.log(result2);
  console.log(`${firstString + secondString}`);
}
// Task 3
function getArea(length, width) {
  let area = length * width;
  return area;
}
function getPerimeter(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
// Task 4
function factorial(input) {
  let result = 1;
  for (let i = input; i >= 1; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(100));
// Task 5
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newArr = s.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (vowels.includes(newArr[i])) {
      console.log(newArr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (!vowels.includes(newArr[i].toLowerCase())) {
      console.log(newArr[i]);
    }
  }
}
// Task 6
function main() {
  const PI = Math.PI;
  let radius = parseFloat(readLine());
  let area = PI * radius * radius;
  let perimeter = 2 * PI * radius;
  console.log(area);
  console.log(perimeter);
}
// Task 7
function getGrade(score) {
  let grade;
  if (25 < score && score <= 30) {
    grade = "A";
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (0 < score && score <= 15) {
    grade = "F";
  }
  return grade;
}
// Task 8
function getSecondLargest(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (currentNumber === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  if (nums.length < 2) {
    return null;
  }
  return nums[nums.length - 2];
}
// Task 9
function getLetter(s) {
    let letter;
    // Write your code here
    
    return letter;
}

