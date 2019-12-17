let myNumbers = [3,5,6,7,8,9];
let overFive = [];

function biggerThanFive(numbers) {
   for (let i = 0; i < numbers.length; i++) {
       let element = numbers[i];
       if (element>5) {
           overFive.push(element);
       
       }
   }
    
}
biggerThanFive(myNumbers);

// console.log(overFive);
alert(overFive);
