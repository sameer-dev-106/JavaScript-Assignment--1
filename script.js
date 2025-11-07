// Level - 1

// 1. print numbers from 1 to 10  loop from 1 to 10 and print each numbers

// Ans - 1
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// 2. print only even numbers from 1 to 20 use loop and conditions to print even ones 

// Ans - 2
// for(let i = 1; i <= 20; i++){
//     if(i%2 === 0) console.log(i);
// }


//3. print numbers from 10 to 1 reverse loop with a decrement

// Ans - 3
// for(let i = 10; i>=1; i--){
//     console.log(i)
// }


//4. print the word "yes" 5 times repeat using a loop

// Ans - 4
// for(let i = 1; i<=5; i++){
//     console.log('Yes')
// }


//5. print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"

// Ans - 5 
// for(let i = 1; i<=10; i++){
//     if(i%2 === 0){
//         console.log(`${i} is an Even Number`);
//     } else {
//         console.log(`${i} is an Odd Number`);
//     }
// }


//6. ask user for a number and say if its  positive or negative  use prompt() and a condition

// Ans - 6 
// let num = prompt("Enter a Number");
// if (num === null) {
//     alert("You Cancelled!");
// } else if (num.trim() === "") {
//     alert("Please enter a number!");
// } else {
//     num = Number(num)
//     if (isNaN(num)) {
//         alert("Please enter a number!");
//     } else if (num > 0) {
//         console.log(`${num} is Positive Number`);
//     } else if (num < 0) {
//         console.log(`${num} is Negative Number`);
//     } else {
//         console.log("Number is Zero");
//     }
// }


//7. Ask user’s age and check if eligible to vote. 
// If age >= 18 → “Eligible”, else → “Not eligible”

// Ans - 7
// let age = prompt("Enter your Age");
// if (age === null) {
//     alert("You Cancelled!");
// } else if (age.trim() === "") {
//     alert("Please enter a number!");
// } else {
//     age = Number(age)
//     if (isNaN(age)) {
//         alert("Please enter a number!");
//     } else if (age <= 0 || age > 120) {
//         console.error("Please enter a valid age!");
//     } else if (age >= 18) {
//         console.log("Congrats! You are Eligible to vote.");
//     } else {
//         console.log("Sorry! You are Not Eligible to vote.");
//     }
// }


//8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// Ans - 8 
// for(let i = 1; i < 11; i++){
//     console.log(`5 X ${i} = ${i * 5}`);
// }


//9. Count how many numbers between 1 and 15 are greater than 8 
// Loop and count conditionally.

// Ans - 9
// let counter = 0;
// for(let i = 1; i <= 15; i++){
//     if(i > 8){
//         counter++;
//     }
// }
// console.log(counter)


//10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// Ans - 10
// let password = "sameer106";
// let userpassword = prompt("Enter Your Password");
// if (userpassword === null) {
//     alert("You Cancelled!");
// } else if (userpassword.trim() === "") {
//     alert("Please enter your password!");
// } else if (userpassword.trim() === password) {
//     console.log("Correct password");
//     console.log("Now access your Account");
// } else {
//     console.error("Invalid Password, please try again!");
// }

