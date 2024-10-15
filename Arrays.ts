
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

function maxSpan(arr: number[]): number {
    let maxSpan = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const leftmost = i;
        const rightmost = arr.lastIndexOf(value);
        const span = rightmost - leftmost + 1;
        maxSpan = Math.max(maxSpan, span);
    }

    return maxSpan;
}