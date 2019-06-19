//---------------------//1//----------------------//

const summation = function(n){

    let sum = 0;

    for (let i = 0; i <= n; i++) {
             sum += i;
    }
    console.log(sum);

}
summation(5);
//---------------------//2//----------------------//

const summationEven = function(n){

    let sum = 0;

    for (let i = 0; i <= n; i++) {
             if (i % 2 === 0){
               sum += i;
             }
    }
    console.log(sum);

}
summationEven(5);
//---------------------//3//----------------------//

const avg = function(n){
  
    let sum = 0;
    for (let i = 0; i < n.length; i++) {      
               sum += n[i];          
    }
    
    console.log(sum/n.length);
}
avg([8, 2, 2, 4]);
//---------------------//4//----------------------//

const reverse = function(n){
  
    let spliit = n.split("");
  
    let reverss = spliit.reverse();
  
    let out = reverss.join("");
  
    console.log(out);
  
  };
  reverse("syarra teg t'ndid eh esuaceB :A // ?poj sih tiuq remmargorp eht did yhW :Q");

  //---------------------//5//----------------------//

  const addDashes = function(n){

    out = n.join("-");
    console.log(out);
  }
  addDashes(['test1', 'test2', 'test3']);

  //---------------------//6//----------------------//

  const countUpAndDown = function(n){

    let start = "";
    for(let i = 1; i <= n; i++ ){
        start += i;
    }
  
    for (let i = n-1; i > 0; i--){
  
      start += i;
  
    }
    console.log(start);
    
  }
  countUpAndDown(3);

  //---------------------//7//----------------------//

  const wordsWithA = function(n){

    outArray = [];
    for(let i = 0; i < n.length; i++) {
  
      if(n[i].indexOf('a') != -1){
      
          outArray.push(n[i]);
      }
    }
    console.log(outArray);
  }
  wordsWithA(['cat', 'rabbit', 'dog', 'frog']);

  //---------------------//8//----------------------//


  const wordsWithLetter = function(a,n){

    outArray = [];
    for(let i = 0; i < n.length; i++) {
  
      if(n[i].indexOf(a) != -1){
      
          outArray.push(n[i]);
      }
    }
    console.log(outArray);
  }
  wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);

  //---------------------//9//----------------------//

  const longestWord = function(n){

    let devied = n.split(" ");
    long = 0;
    longWord = ""
    for (let i = 0; i < devied.length; i++){
        if (devied[i].length > long){
          long =  devied[i].length;
          longWord = devied[i];
        }
  
    }
    console.log(longWord);
  }
  longestWord("The cat in the house");

    //---------------------//10//----------------------//

    const largestEvenNumber = function(n){

        largetN = [];
        for(let i = 0; i < n.length; i++){
          if( n[i] % 2 === 0){
            largetN.push(n[i]);
          }
        }
        console.log(Math.max(...largetN))
          
        }
        largestEvenNumber([1,2,3,10,4,7,0]);

//---------------------//Extra Practice//----------------------// 

// I did most of the game but not all of it.
// The missing part is When you Enter an incorrect letter
// it will prompt you again to enter another letter
// I am writing this at 1 AM So excuse my spilling && grammer mistakes
// Thx

const guessLetter = function(){
    let wordLetters = ['G', 'O', 'A', 'T'];
    
      let guessedLetters = ['_' , '_', '_', '_'];
      let remainLetters = wordLetters.length;
      alert(guessedLetters.join("  "));
       while (remainLetters > 0){
        
          
        let guess = prompt("Please enter a one letter:");
        if (guess === null || guess.length !== 1){
          alert("not a vaild input!!");
          break;
        }else{
          for ( let i = 0; i < wordLetters.length ;i++){
              if( wordLetters[i] === guess ){
                guessedLetters[i] = guess;
                remainLetters--;
                  alert(`Correct,   ${guessedLetters.join("  ")} `);
              }      
            }
        }
  
     }
          alert(`The Right answer was,   ${wordLetters.join("  ")} `);
        
}
          
    
    guessLetter();