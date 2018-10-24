var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

var data2 = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]


// A. Plan Out / Break Down solution

// 1. look at one row
// 2. find that rows largest
// 3. find that rows smallest
// 4. find the difference
// 5. add the difference to an ongoing total
// 6. Go to next row
// 7. repeat 1-6



// B. Edge Case
//
// 1. No value so check if passed in value is truthy
// 2. No array gives error - check if type is array
// 3. Empty array returns 0


// C. Pseudocode
//     check edge cases
//     total to 0
//     loop over array
//         min = MIN_NUMBER
//         max = MAX_NUMBER
//         loop over row
//             see if number is lower than min, replace min
//             see if number is greater than max, replace max
//         end loop
//         calc difference of max and min
//         add diff to total
//     end loop
//     return total


// D. Implementation



function checksum(data) {

    //ask the interviewer what assumptions and stuff
    //array.isarray is validation
    if (!data && Array.isArray(data)) {
        alert("Incorrect data format")
    }

    let total = 0;



    data.forEach(row => {
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;


        //or use Math.max and min and spread operator
        max = Math.max(...row);
        min = Math.min(...row);
        //
        //
        // row.forEach(num => {
        //
        //     if (num < min){
        //         min = num;
        //     }
        //     if(num > max){
        //         max = num;
        //     }
        // });

        total += (max - min);

    });

    return total;

}

console.log(checksum(data));
console.log(checksum(data2));
