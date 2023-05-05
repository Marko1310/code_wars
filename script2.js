// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

const fake = function (number) {
   const arr = number.split('')
   console.log(arr);
   const newArray = arr.map(el => {
      if (el < 5) {
       return  el = 0
      } else if (el >= 5){
        return el = 1
      }
   })
   console.log(newArray.join(''));
}

fake ('1234567')