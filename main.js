// Task 1:
// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]

const repeat = (arr) => {

    let n = arr.length;
    let result = [];

    // repeat 3 times
    for (let i = 0; i<3; i++){
        // iterate through input array
        for (let j = 0; j<n; j++) {
            result.push(arr[j]);
        }
    }
    return result;
}
 //repeat([1,2,3]) returns [1,2,3,1,2,3,1,2,3]



// Task 2:
// Make this work (no vowels, lowercase except the first letter):
// reformat("liMeSHArp DeveLoper TEST") //Lmshrp dvlpr tst

const reformat = (string) => {

    // changing to lowercase
    string = string.toLowerCase();

    // removing vowels
    let noVowels = string.replace(/a/g,'').replace(/e/g,'').replace(/i/g,'').replace(/o/g,'').replace(/u/g,'');

    // uppercase first letter
    noVowels = noVowels.charAt(0).toUpperCase() + noVowels.slice(1);

    return noVowels;
    }
    // reformat('liMeSHArp DeveLoper TESTaa'); //returns 'Lmshrp dvlpr tst'



// Task 3 (optional, for bonus points):
// Make this work (without using any built in functions, only a for loop, return the next binary number in a string or as an array)
// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]

const next_binary_number = (input) => {
    let n = input.length;
    
    // 1,1 -> 1,0,0
    if (input[n-1] == 1 && input[n-2] == 1) {
        
        // iterate and change all 1 to 0 until finds 0 and change 0 to 1
        for (let j = n-1; j >=0; j--){
            
            if (input[j] == 0) {
                input[j] = 1;
                return input;
            }

            if (input[j] == 1) {
                input[j] = 0;
            }
        }

        // if no 0 was found, add a 1.
        input.splice(0, 0, 1)
        return input;
    }

    // 0,1 -> 1,0
    if (input[n-1] == 1 && input[n-2] == 0) {
        input[n-1] = 0;
        input[n-2] = 1;
        return input;
    }
        // 0 -> 1
    if (input[n-1] == 0) {
        input[n-1] = 1;
        return input;
    }

    return(input);
}
// next_binary_number([1,0,1]); returns [ 1, 1, 0 ]
// next_binary_number([1,1,0]); returns [ 1, 1, 1 ]
// next_binary_number([1,1,1]); returns [ 1, 0, 0, 0 ]