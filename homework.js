//#1 :
let n = prompt ('Enter Number');
let sum = 0;
function sumOfTheNumbers(n){
for( let i=1; i<=n; i++){
sum= sum +i;


}
console.log(sum);

    
}
sumOfTheNumbers(n);
//#2: 
let n = prompt ('Enter Number');
let sum = 0;
function sumOfTheNumbers(n){
for( let i=1; i<=n; i++){
if ( i %2==0)
sum= sum +i;
}
console.log(sum);
}
sumOfTheNumbers(n);

//#3:
let sum = 0;
let i=0;
let avg=[8, 2, 2, 4];
function sumOfTheNumbers(){
for(i=0; i<=avg.length -1; i++){

sum+= avg[i];
}
console.log(sum/avg.length);
}
sumOfTheNumbers();

//#4:
function reverseString(str){
    let stringRev ="";
    for(let i= 0; i<str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev;
}
console.log(reverseString("caterpillar"));

//#5:
var  words=['test1', 'test2', 'test3'];
console.log(words.join('-'));

//#7:
animals = ['cat', 'rabbit', 'dog', 'frog'];

      animals.forEach(function(arrayItem,arrayIndex,array){
              if(array[arrayIndex].match('a')){
               console.log(array[arrayIndex]);
              }
      })

      //#8:
      animals = ['cat', 'rabbit', 'dog', 'frog'];

      animals.forEach(function(arrayItem,arrayIndex,array){
              if(array[arrayIndex].match('g')){
               console.log(array[arrayIndex]);
              }
      })

      //#9:
      function longestWord(sentence) {
        var arr = sentence.split(" ");
     
        var longestWord = "";
        arr.forEach(function(word) {
           if (word.length > longestWord.length) {
              longestWord = word;
           }
        });
        return longestWord;
     }
     
     console.log(longestWord("The cat in the house"));


     //#10:
     const largestEvenNumber= [ 1,2,3,10,4,7,0];
const maxNumber = Math.max(...largestEvenNumber);
console.log(maxNumber);