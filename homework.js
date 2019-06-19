
const summation = function(num) {
    let sum = 0;
    for(let i = num; i> 0 ; i--){
        sum += i;
    }
    return sum;
}

const summationEven = function(num){
    let sum = 0;
    for(let i = num; i> 0 ; i--){
        if(i % num === 0)
            sum += i;
    }
    return sum;
}

const avg = function(arr) {
    let sum = 0;
    for(v of arr){
        sum += v;
    }
    return sum / arr.length;
}

const reverse = function(str) {
    let reverse = '';
    for(let c of str) {
        reverse = c + reverse
    }
return reverse;
}

const addDashes = function(arr){
    return arr.join('-')
}

const countUpAndDown = function(num) {
    let result = '';
    for(let i = 1; i <= num; i++)
        result += i + ' ';
    for(let i = num - 1; i>=1 ; i--)
        result += i + ' ';
    return result;
}

const wordsWithA = function(arr){
    return arr.filter(v => v.indexOf('a') !== -1);
}

const wordsWithA = function(letter ,arr){
    return arr.filter(v => v.indexOf(letter) !== -1);
}

const longestWord = function(str){
    strArray = str.split(' ');
    let longest = '';
    for(str of strArray){
        if(str.length > longest.length){
            longest = str;
        }
    }
    return longest;
}

const largestEvenNumber = function(arr){
    let largest = 0;
    for(num of arr){
        if(!(num%2)){
            if(num > largest){
                largest = num;
            }
        }
    }
    return largest;
}