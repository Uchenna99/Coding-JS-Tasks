// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
function firstLast6(nums) {
    if ((nums[0] === 6) || (nums[nums.length - 1]) === 6) {
        return true;
    }
    else {
        return false;
    }
}
// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the 
// two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
function maxSpan(arr) {
    var maxSpan = 0;
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        var leftmost = i;
        var rightmost = arr.lastIndexOf(value);
        var span = rightmost - leftmost + 1;
        maxSpan = Math.max(maxSpan, span);
    }
    return maxSpan;
}
