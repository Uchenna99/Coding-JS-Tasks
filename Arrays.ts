
// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

function firstLast6(nums:number[]){
        if((nums[0] === 6) || (nums[nums.length - 1]) === 6){
            return true;
        }else{
            return false;
        }
}





// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the 
// two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

function maxSpan(arr: number[]) {
    let spanArr:number[] = []
    let highestSpan:Number = 0
    if(spanArr === arr){
        highestSpan = 0
    }else{
        for (let i = 0; i < arr.length; i++) {
            let leftmost = i;
            let rightmost = arr.lastIndexOf(arr[i]);
            let span = rightmost - leftmost + 1;
            spanArr.push(span)
        }
        highestSpan = Math.max(...spanArr)
    }
    return highestSpan;
}
console.log(maxSpan([1,2,3,4,5,2]));






// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is 
// equal to the sum of the numbers on the other side.

function canBalance(arr: number[]): boolean {
    let totalSum:number = 0
    let leftSum:number = 0
    let result = false
    for(let i = 0; i < arr.length; i++){
        totalSum += arr[i]
    }

    for (let i = 0; i < arr.length - 1; i++) {
        leftSum += arr[i];
        let rightSum:number = totalSum - leftSum;
        
        if (leftSum === rightSum) {
            result = true;
        }
    }
    return result;
}







// Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). 
// Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.

