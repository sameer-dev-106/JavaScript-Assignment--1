// Level - 1 (Completed by - Sameer)

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

// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// Ans - 11
// const password = "sameer106";
// let attempts = 0;
// let userPassword;

// while(attempts < 3) {
//     userPassword = prompt("Enter your password:");
//     if(password === userPassword){
//         console.log("Correct password");
//         console.log("Now access your Account");
//         break;
//     } else {
//         attempts++;
//         if(attempts < 3){
//             alert(`Wrong password! You have ${3 - attempts} attempts left.`);
//         }
//     }
// }

// if(attempts === 3 && userPassword !== password){
//     alert("Account locked due to too many failed attempts.");
//     console.error("Account locked")
// }


//12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// Ans - 12
// let counter = 0;
// let words = "";
// while (words !== "stop") {
//     words = prompt("Write a word:");
//     if (words.toLowerCase() === "yes") {
//         counter++;
//     }
// }
// console.log(`You typed "yes" ${counter} times`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// Ans - 13
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// Ans - 14
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 === 1) {
//         sum += i;
//     }
// }
// console.log(sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// Ans - 15
// let num = null;
// while(true){
//     num = Number(prompt("Enter a number: "));
//     if(num%2 === 0) {
//         console.log(`${num} is an Even Number`);
//         break;
//     } else {
//         alert(`${num} is Odd, try again!`);
//     }
// }


//16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// Ans - 16
// let start = +prompt("Enter your first number: ");
// let end = +prompt("Enter your last number: ");

// if (start === end) {
//     console.log("Both numbers are same", start);
// } else if (start < end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// } else {
//     for (let i = start; i >= end; i--) {
//         console.log(i);
//     }
// }


//17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// Ans - 17
// let counter = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         counter++;
//     }
//     if (counter === 3) break;
// }
// console.log("Printed first 3 odd numbers successfully.");


//18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// Ans - 18
// let counter = 0;
// for (let i = 1; i <= 5; i++) {
//     let num = Number(prompt("Enter a Number: "));
//     if (isNaN(num)) {
//         alert("Invalid input! Please enter a number");
//         i--;
//     } else if (num > 0) {
//         counter++;
//     }
// }
// console.log(`You entered ${counter} positive values`);