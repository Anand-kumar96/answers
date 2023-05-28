/*
2: Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 
const result2 = a.<your code here>
*/
// Logic: We have to find square of each number in array
// Code 

const a = [1, 3, 5, 2, 4];
const result2 = a.map((num) => {
  return num * num;
})
console.log(result2);
