let myNumbers=[3,5,6,7,8];
function biggerThanFive() {
   for (let index = 0; index < myNumbers.length; index++) {
       let element = myNumbers[index];
       if (element>5) {
           alert(element);
       }
   }
    
}