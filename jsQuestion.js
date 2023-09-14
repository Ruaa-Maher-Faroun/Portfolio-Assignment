/*
First, we sort the array and then we will use binary search to search for the middle point.
Though the input is an array, still the array has all numbers between 0 - n.
This means 0 - nums.length. I can use binary search. My left pointer is zero and the right pointer is the length of the array.
I will find the middle point which is expected to be in the middle. 
If the element at index mid == the value that is supposed to be in the middle => then I know for sure that the missing number isn't on the 
left part of the array. And I will drop the left part and search from (mid+1 - length of the array).
If the middle point wasn't the expected value, then I know the missing number is on the left because the mid point has been shifted to 
the left due to the absence of a number(the required number) 
*/
const missingNumber = (nums) => {
  nums.sort(function (a, b) {
    return a - b;
  });
  (l = 0), (r = nums.length - 1);
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] == mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};

//tests
console.log(missingNumber([3, 0, 1]) == 9); //False
console.log(missingNumber([3, 0, 1]) == 2); //True
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 5); //False
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8); //True

console.log(missingNumber([0, 1]) == 3); //False
console.log(missingNumber([0, 1]) == 2); //True
