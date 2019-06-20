var sum=0;
const summation = function (n){
for (var i=1 ; i<=n ; i++){
 sum+=i;}
return sum;}

var sumEven=0;
const summationEven = function (n){
for (var i=1 ; i<=n ; i++){
 if(i%2 === 0){
  sumEven+=i;}}
return sumEven;}

const avg = function (numArray){
    var total=0;
    var arrayCount = numArray.length;
    for (var i=0; i<arrayCount;i++){
       total+= numArray[i];}
       return total /arrayCount;}

const reverse = function (word){
    var splitWord = word.split("");
    var reverseWord = splitWord.reverse(); 
    var  joinWord = reverseWord.join("");    
    return joinWord; 
}

const addDashes = function (strArray){
    var  joinArray = strArray.join("-"); 
    return joinArray;}
    
     countArray = [];
const countUpAndDown = function (num){ 
     for (var i=0 ;i<num; i++){
        countArray [i] = i+1;}
     for (var i=countArray.length-1; i>0 ;i--) {
        countArray[countArray.length++]= i;}
     return countArray;}
     
     var counter1=0;
     arrayOfA=[];
const wordsWithA = function (arrayStrings){ 
     for (var i=0 ; i< arrayStrings.length ;i++){
      if (arrayStrings[i].indexOf('a')>0){
        arrayOfA[counter1]= arrayStrings[i];
        counter1++; }}
        return arrayOfA;}
        
     
const wordsWithLetter = function (letterEntered,arrayStrings){ 
     arrayOfLetter=[];
     var counter2=0;
     for (var i=0 ; i< arrayStrings.length ;i++){
     if (arrayStrings[i].indexOf(letterEntered)>0){
      arrayOfLetter[counter2]= arrayStrings[i];
      counter2++; }}
      return arrayOfLetter;}
    
const longestWord = function (sentence){ 
     var sentenceSplit = sentence.split(' ');
     var longest = 0;
     var longWord;
         for(var i = 0; i < sentenceSplit.length; i++){
         if(sentenceSplit[i].length > longest){
            longest = sentenceSplit[i].length;
            longWord= sentenceSplit[i];  }}
        return longWord;}


const largestEvenNumber = function (evenArray){ 
            var largest =0;
            for (var i=0; i<evenArray.length;i++){
            if (evenArray[i]%2 ===0 && evenArray[i]> largest){
               largest=evenArray[i];}}
               return largest;}


//extra 
               const wordArray = ['G', 'O', 'A', 'T'];
               const guessedArray  = ['_', '_', '_', '_'];
               const guessLetter = function (letter){ 
                   var flag = true;
                for (var i =0;i<wordArray.length;i++){
                 if(letter === wordArray[i] ){
                   guessedArray[i] =letter ;}}
                   var found = false;
                   if (wordArray.indexOf(letter) > -1) {
                       found = true;
                      }   if (found){ console.log(guessedArray +"congrats you found new letter");}else {{ console.log(guessedArray +"incorrect");}}
               
                    for (var i =0;i<guessedArray.length;i++){ 
                       if(guessedArray[i] ==='_'){
                           flag = false;}}
                       if(flag){
                       console.log(guessedArray +" congrats you win");}}
                 
   
       