// 1
const summation=function(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
return sum;//summation(5); >> 15

}

// 2
const summationEven=function(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        if(i%2===0){
        sum+=i;}
    }
return sum;//summationEven(5) >> 6

}

// 3
const avg=function (array) {
    let sum = 0;
    let count=0;
    for (var i = 0; i < array.length; i++) {
        sum +=array[i];
        count++;
    }
    return sum/count; //avg([8,2,2,4]) >> 4
}
// 4
const reverse= function(string){
    let revstr = "";
    for(let i = string.length-1; i>=0; i--){
        revstr = revstr+ string[i];
    }
    return revstr;//reverse("caterpillar"); >> "rallipretac"
}
 // 5
 const addDashes=function(array){
   
    return array.join("-"); //addDashes2(["test1","test2","test3"]); >> "test1-test2-test3"


}

// 6

const countUpAndDown=function(num) {
    var s = "";

    for(var i = 1; i <= num; i++) {
      s += i;
      
      if (i < (num)) {
        s += ', ';
      }
    }
    return s;
  }
  var sequence = function(num){
    if(num === 1){
 return '1';}

    else return sequence(num + 1) + ', ' + num + ', '+sequence(num - 1);}

    // 7
    const wordsWithA=function(array){
        let arr=[];
        for(let i=0;i<=array.length;i++){
        if (array.indexOf('a') > -1){
            arr.push(array[i]);
        }
        }}

    // 8
const wordsWithLetter=function (yourString,array){
var arr=[];
for(let i=0;i<=array.length;array++){
    if (array[i].includes(yourString )=== true){
        arr.push(array[i]);
    }
   
}
return arr;
}





    // 9
    const longestWord=function (string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        str.forEach(function(str) {
            if (longest < str.length) {
                longest = str.length;
                word = str;
            }
        });
        return word;
    } //longestWord("The cat in the house"); >> "house"




    // 10
    const largestEvenNumber=function(array){
        let largest=0;
for(let i=0;i<=array.length;i++){
    if(array[i]%2===0){
if (array[i]>largest){
    largest=array[i];
}
    }
    
}
return largest;

    } // largestEvenNumber([1,2,3,10,4,7,0]); >> 10