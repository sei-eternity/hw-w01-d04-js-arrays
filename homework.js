Q1

const summation = function(input){
    let sum =0
    for(let i =0;i<=input;i++){
      sum = sum +i;
      
    }
    console.log(sum);
  }
  
  summation(10)

  Q2

  const summationEven = function(input){
    let sum =0
    for(let i =0;i<=input;i=i+2){
      sum = sum +i;
      
    }
    console.log(sum);
  }
  
  summationEven(5)

  Q3

  const avg = function(arr){
    let sum =0;
    
    for(let i =0;i < arr.length;i++){
      
      sum = sum + arr[i];
      
      
    }
    let average = sum/arr.length;
  
    console.log(average);
  }
  
  avg([8, 2, 2, 4])
  avg([20, 10, 0, 0])

  Q4

  const reverse =function(word){
    let reWord=""
    for(let i = word.length-1;i>0;i--){
      reWord += word[i];
    }
    console.log(reWord)
  }
  reverse("caterpillar")

  Q5
  const addDashes = function(arr){
    let word = ""
    
      word += arr.join("-")
    console.log(word)
    }
    
    
    addDashes(['test1', 'test2', 'test3'])

    Q6

    const countUpAndDown = function(num){
        let count =""
        for(let i =1; i<=num;i++ ){
          count += i
          
      
        }
        
        for(let i =num-1; i >0 ;i-- ){
          count = count + i;
          
        }
        console.log(count)
      }
      
      countUpAndDown(3)
      
      Q7

      const wordsWithA = function(letterA){
        for(let i= 0; i<letterA.length;i++){
          if (letterA[i].search("a") == true ){
            console.log(letterA[i]);
          }
        }
      }
      wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

      Q8
      const wordsWithLetter = function(letter,word){
  
        for(let i= 0; i<word.length;i++){
     
     
         if (word[i].search(letter) == true ){
           console.log(word[i])
           //I do not know why this part does not work
         }
       }
     }
     wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])

     Q9
     const longestWord= function(word){
        let arr = word.match(/\w[a-z]{0,}/gi) 
        //I found this method online so I use it after I understand it
        let longArr= arr[0]
        for(let i = 1 ; i < arr.length ; i++)
        {
          if(longArr.length < arr[i].length)
          {
          longArr = arr[i];
          } 
        }
        console.log(longArr)
      }
      
      
       
      longestWord("The cat in the house")



      Q10

      const largestEvenNumber= function(arr){
        let evenNum =0;
        for(let i =0;i<arr.length;i++){
          if((arr[i]%2==0)&&(arr[i]>evenNum)){
            evenNum = arr[i];
      
          }
        }
        console.log(evenNum)
      
      }
      
      largestEvenNumber([1,2,3,10,4,7,0])