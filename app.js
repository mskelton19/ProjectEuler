// Problem 1

// let sum = 0;
// for (let i = 0; i < 1000; i++){
//   if (i % 3 === 0 || i % 5 === 0){
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log(sum)



// Problem 2

// let sequence = 0;
// const numbers = [];
// for(let i = 1; i <= 4000000; i += sequence){
//     sequence = i - sequence;
//     numbers.push(i);
// }
//
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 == 0){
//     sum = sum + numbers[i];
//   }
// }
// console.log(sum);


// Problem 3

for(let i = 2; i <= 775146; i++){
  if(600851475143 % i === 0){
    console.log(i)
  }
}
