//Problem [1] : Solve Me First
function solveMeFirst(a, b) {
    return a + b;
}
//Problem [2] : Simple Array Sum
function simpleArraySum(ar) {
    let result = 0;
    for(let i = 0 ; i < ar.length;i++){
        result+=ar[i];
    }
    return result;
}
//Problem [3] : Compare the triplets
function compareTriplets(a, b) {
    let arr=[0,0];
    for(let i = 0 ;i<a.length;i++){
        if(a[i] > b[i]){
            arr[0]+=1;
        }else if(a[i] < [b[i]]){
            arr[1]+=1;
        }
    }
    return arr;
}
//Problem [4] : Common Child
function commonChild(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}