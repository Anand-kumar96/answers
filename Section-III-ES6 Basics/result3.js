/*
3: Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 
const result3 = a.<your code here>
*/
// Logic: We have to filter based on index if index is even then filter it and find square of filter number
// Code 

const a = [1, 3, 5, 2, 4];
const result3 = a
  .filter((num, i) => {
    return i % 2 == 0 ? num : false;
  })
  .map((el) => el * el)
console.log(result3);
