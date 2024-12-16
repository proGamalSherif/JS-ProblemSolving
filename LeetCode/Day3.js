//Problem [1] : Minimum Number Game
var numberGame = function(nums) {
    let arr=[];
    for(let i = 0 ; i < nums.length;i++){
        arr.push(nums[i]);
    }
    arr.sort((a, b) => a - b);
    let result = [];
    let arrAlice = [] ;
    let arrBob = [] ;
    let lastChoice = 1;
    while(arr.length > 0 ){
        // console.log(arr[0]);
        if(lastChoice===0){
            arrBob.push(arr[0]);
            lastChoice=1;
        }else{
            arrAlice.push(arr[0]);
            lastChoice=0;
        }
        arr.splice(0,1);
    }
    for(let i = 0 ; i < arrAlice.length;i++){
        result.push(arrBob[i]);
        result.push(arrAlice[i]);
    }
    return result;
};


// console.log(numberGame([17,2,4,11,14,18]).join(","));
console.log(numberGame([17,2,4,11,14,18]).join(","));