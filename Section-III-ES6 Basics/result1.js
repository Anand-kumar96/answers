/*
1: Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form:
const result1 = a.<your code here>
*/
// Logic: We have to filter based on index if index is even then filter it.
// Code 

const a = [1, 3, 5, 2, 4];
const result1 = a.filter((num, i) => {
  return i % 2 == 0 ? num : false
})
console.log(result1);



