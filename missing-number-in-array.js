
//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution{
    missingNumber(array,n){
        //code here
        let arraySum = 0;
        for (let index = 0; index < array.length; index++) {
            arraySum += array[index];            
        }
        let firstNElemetSum = n*(n+1)/2
        return firstNElemetSum - arraySum;
    }
}

let obj = new Solution();
console.log(obj.missingNumber([1,2,3,5], 5));