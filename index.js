console.log("hello world");
/* ============================================================
   JS CLASS — ONE-FILE WORKBOOK
   ------------------------------------------------------------
   How to use:
   - Each exercise is written as a comment (lines starting with //).
   - Write your JavaScript in the blank space under each one.
   - Use console.log(...) to print your answer.
   - Run this file with Node:   node workbook.js
     (or paste one exercise at a time into a lesson's Run box.)

   Sections:
     PART 1 — IF STATEMENTS        (1–10)
     PART 2 — COMBINED PROJECT     (1–20)
     PART 3 — STRINGS + INTERVIEW  (1–25)
   ============================================================ */

/* ============================================================
   PART 1 — IF STATEMENTS
   ============================================================ */

// ----- 1. Simple if -----
// Declare `let age = 16`. Write an if that logs "You can drive" when age >= 16.
let age = 16;
if (age >= 16) {
  console.log("You can drive");
} else {
  console.log("Cant drive");
}

// ----- 2. if / else -----
// Declare `let isWeekend = true`. Log "Relax!" if it is the weekend, otherwise "Go to work".
let isWeekend = true;
if (isWeekend === true) {
  console.log("Relax");
} else {
  console.log("Go to work");
}

// ----- 3. Even or odd -----
// Declare `let number = 7`. Use if/else and `number % 2 === 0` to log "even" or "odd".
let number = 7;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ----- 4. Grade the score -----
// Declare `let score = 82`. Log the letter grade:
//   90+ -> "A", 80–89 -> "B", 70–79 -> "C", below 70 -> "F".
let grade = 82;
if (grade === 100 || grade >= 90) {
  console.log("A");
} else if (grade <= 89 || grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// ----- 5. Biggest of two -----
// Declare `let a = 14` and `let b = 9`. Log whichever is larger, or "equal" if they match.
let a = 14;
let b = 9;
if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else {
  console.log("equal");
}
// ----- 6. Temperature advice -----
// Declare `let temp = 30`. Log:
//   above 28 -> "Wear shorts", 15 to 28 -> "Wear a jacket", below 15 -> "Wear a coat".
let temp = 30;
if (temp > 28) {
  console.log("Wear shorts");
} else if (temp <= 28 || temp >= 15) {
  console.log("Wear a jacket");
} else if (temp > 15) {
  console.log("{Wear a coat");
}
// ----- 7. Login message -----
// Declare `let username = "admin"` and `let password = "1234"`.
// If both are correct, log "Welcome", otherwise "Access denied".
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Welcome brother");
} else {
  console.log("Access denied");
}

// ----- 8. Positive, negative, zero -----
// Declare `let n = -5`. Log "positive", "negative", or "zero".
let n = -5;
if (n >= 1) {
  console.log("positive");
}
if (n <= -1) {
  console.log("negative");
}
if ((n = 0)) {
  console.log("zero");
}

// ----- 9. Ticket price -----
// Declare `let age = 65`. Price: under 12 -> "$5", 12 to 64 -> "$12", 65+ -> "$8".
let age1 = 65;
if (age1 <= 12) {
  console.log("5$");
}
if (age1 <= 64 || age1 >= 12) {
  console.log("$12");
}
if (age1 >= 65) {
  console.log("$8");
}

// ----- 10. Traffic light -----
// Declare `let light = "yellow"`. Log:
//   "green" -> "Go", "yellow" -> "Slow down", "red" -> "Stop", else -> "Invalid light".
let light = "red";
if (light === "green") {
  console.log("go");
} else if (light === "yellow") {
  console.log("slowdown");
} else if (light === "red") {
  console.log("Stop");
} else {
  console.log("Invalid light");
}
/* ============================================================
   PART 2 — COMBINED PROJECT (variables + operators + if)
   ============================================================ */

// ----- 1. Movie ticket machine -----
// Variables: age, hasMembership (boolean).
//   under 12 OR over 65 -> "$6", member of any age -> "$8", everyone else -> "$12". Log the price.

// ----- 2. Password strength -----
// Variable: password (string). Using password.length:
//   >= 12 -> "Strong", >= 8 -> "Medium", otherwise -> "Weak".

// ----- 3. Game level up -----
// let xp = 250, const levelUpAt = 200. If xp >= levelUpAt, log "Level up!" and reset xp to 0;
// otherwise log how much XP is left. Show xp before and after.

// ----- 4. Tip calculator -----
// Variables: bill, serviceWasGood (boolean). Good -> 20% tip, otherwise 10%.
// Compute the tip and the total, log both.

// ----- 5. Weather outfit -----
// Variables: temp, isRaining (boolean).
//   raining AND temp < 15 -> "Coat and umbrella", raining only -> "Umbrella",
//   temp > 28 -> "T-shirt", otherwise -> "Light jacket".

// ----- 6. Exam pass with bonus -----
// Variables: score, attendedExtraClass (boolean).
// Pass if score >= 50, OR if score >= 45 AND attended the extra class. Log "Pass" or "Fail".

// ----- 7. Cart discount -----
// Variables: total, isMember (boolean).
//   total >= 100 AND member -> 20% off, total >= 100 only -> 10% off, otherwise -> no discount.
// Log the final price.

// ----- 8. Login system -----
// Variables: const correctUser, const correctPass, plus enteredUser, enteredPass, isLocked (boolean).
// Log "Welcome" only when NOT locked AND both username and password match. Otherwise "Login failed".

// ----- 9. BMI category -----
// Variables: weight (kg), height (m). bmi = weight / (height * height). Log:
//   below 18.5 -> "Underweight", 18.5–24.9 -> "Normal", 25–29.9 -> "Overweight", 30+ -> "Obese".

// ----- 10. Mini ATM -----
// let balance = 500, let withdrawAmount = 200, const dailyLimit = 300.
// Allow only when withdrawAmount <= balance AND withdrawAmount <= dailyLimit.
//   allowed -> subtract from balance, log "Success" + new balance;
//   too much -> "Insufficient funds"; over limit -> "Over daily limit".

// ----- 11. Leap year check -----
// Variable: year. Leap when divisible by 4 AND (not divisible by 100 OR divisible by 400).
// Use % with && and ||. Log "Leap year" or "Normal year". Test with 2000, 1900, 2024.

// ----- 12. FizzBuzz (one number) -----
// Variable: n. divisible by 3 AND 5 -> "FizzBuzz", by 3 only -> "Fizz", by 5 only -> "Buzz",
// otherwise -> the number itself. Test with 15, 9, 10, 7.

// ----- 13. Rock paper scissors -----
// Variables: player1, player2 (strings: "rock", "paper", "scissors").
// Log "Player 1 wins", "Player 2 wins", or "Tie". rock>scissors, scissors>paper, paper>rock.

// ----- 14. Triangle type -----
// Variables: sides a, b, c. First check valid triangle (each side < sum of other two).
// invalid -> "Not a triangle"; all equal -> "Equilateral"; exactly two equal -> "Isosceles";
// all different -> "Scalene".

// ----- 15. 12-hour clock -----
// Variable: hour (0–23). Convert to 12-hour and log like "3 PM".
//   0 -> "12 AM", 12 -> "12 PM", 1–11 -> "AM", 13–23 -> subtract 12 and add "PM".
// Test with 0, 9, 12, 18.

// ----- 16. Shipping cost -----
// Variables: weight (kg), isExpress (boolean), isMember (boolean).
// Base: weight <= 1 -> $5, weight <= 5 -> $10, otherwise -> $20.
// If isExpress, double base. Then if isMember, take $3 off (never below $0). Log final cost.

// ----- 17. Progressive tax -----
// Variable: income. first $10,000 -> 0%, $10,001–$30,000 -> 10% on that portion,
// above $30,000 -> 20% on that portion. Log total tax. Test with 5000, 20000, 50000.

// ----- 18. Password validator -----
// Variables: password (string), confirmPassword (string). Log "Valid" only when ALL true:
//   length >= 8, NOT equal to "password", AND matches confirmPassword.
// Otherwise a specific reason: "Too short", "Too common", or "Does not match" (in that order).

// ----- 19. Concert pricing -----
// Variables: age, day (string), hasVipCode (boolean). Start price $50.
//   under 18 OR 65+ -> half price; day is "Tuesday" -> $10 off (after age discount);
//   hasVipCode -> add flat $30 at the end. Log the final price.

// ----- 20. Vending machine -----
// const price = 150 (cents), insertedAmount (cents), isSoldOut (boolean). In order:
//   isSoldOut -> "Sold out" and stop; insertedAmount < price -> log how much more is needed;
//   exact -> "Enjoy your drink!"; too much -> "Enjoy your drink!" AND change (insertedAmount - price).

/* ============================================================
   PART 3 — STRINGS + INTERVIEW ROUND
   ------------------------------------------------------------
   Tools: .length .toUpperCase() .toLowerCase() text[i] .charAt()
          .includes() .indexOf() .slice() .substring() .trim() + (join)
   Convert: String(n)  Number(s)  (n).toString()  "" + n  isNaN(Number(x))
   ============================================================ */

// ----- 1. How long is the word? -----
// word (string). Log word.length. if longer than 5 -> "Long word", else "Short word".
// Test "sun" and "elephant".

// ----- 2. Loud and quiet -----
// name (string). Log it with .toUpperCase() and with .toLowerCase().

// ----- 3. First and last letter -----
// word (string). Log word[0] and word[word.length - 1]. Test "hello" -> h and o.

// ----- 4. Cut a piece (slice) -----
// word = "JavaScript". Log word.slice(0, 4) and word.slice(4).

// ----- 5. Is it an email? -----
// email (string). if email.includes("@") -> "Looks like an email", else "Not an email".
// Test "sam@mail.com" and "sam.com".

// ----- 6. Full name builder -----
// firstName, lastName (strings). Join with a space using + into fullName.
// Log fullName and fullName.length.

// ----- 7. Valid username -----
// username (string). Valid only when length >= 3 AND <= 15.
// Log "Valid username" or "Invalid username".

// ----- 8. Same word? (ignore case) -----
// a, b (strings). if a.toLowerCase() === b.toLowerCase() -> "Match", else "No match".
// Test "Hello" and "hello".

// ----- 9. Clean the spaces (trim) -----
// raw = "   hi there   ". clean = raw.trim(). Log clean and clean.length. Compare to raw.length.

// ----- 10. Find a letter (indexOf) -----
// word (string). word.indexOf("a"). if -1 -> "No letter a", else "Found a at position " + ...
// Test "banana" and "sky".

// ----- 11. Phone area code -----
// phone (10-char string like "5551234567"). Log "Area code: " + phone.slice(0, 3).
// if phone.length is not exactly 10 -> "Invalid number".

// ----- 12. Password rule (length + word) -----
// password (string). "Strong" only when length >= 8 AND NOT contains "password"
// (!password.toLowerCase().includes("password")). Otherwise "Weak".

// ----- 13. Initials -----
// firstName, lastName (strings). first letters uppercase, join with + and dots -> "M.J.".
// "maria" + "jones" -> "M.J.".

// ----- 14. Capitalize a name -----
// name = "maria". Join name[0].toUpperCase() with name.slice(1) -> "Maria".

// ----- 15. Tiny palindrome check -----
// word (3-letter string like "mom"). Reverse with word[2]+word[1]+word[0], compare with ===.
// Log "Palindrome" or "Not a palindrome". Test "mom" and "cat".

// --- Interview round: Numbers <-> Strings ---

// ----- 16. Count the digits -----
// n (number). String(n).length. if more than 3 digits -> "Big number", else "Small number".
// Test 42 and 10000.

// ----- 17. Sum the two digits -----
// n (2-digit number like 47). s = String(n). Number(s[0]) + Number(s[1]). Log the sum.
// if sum is exactly 10 -> "Round". Test 47 and 55.

// ----- 18. First and last digit -----
// n (3-digit number). s = String(n). Log Number(s[0]) and Number(s[s.length - 1]).
// if equal -> "Same ends". Test 363 and 481.

// ----- 19. Reverse a 3-digit number -----
// n (3-digit number). s = String(n). reversed = Number(s[2] + s[1] + s[0]). Log it.
// Test 123 -> 321.

// ----- 20. Palindrome number -----
// n (3-digit number). Build reversed like #19, compare to n with ===.
// Log "Palindrome" or "Not a palindrome". Test 121 and 123.

// ----- 21. Contains a lucky 7? -----
// n (number). if String(n).includes("7") -> "Lucky!", else "No luck". Test 1700 and 2024.

// ----- 22. Glue two numbers -----
// a = 12, b = 34. Number(String(a) + String(b)) -> 1234. Log it, then log typeof the result.

// ----- 23. Pad the clock -----
// minute (0–59). if String(minute).length === 1 add "0" in front. Log like "05" or "42".
// Test 5 and 42.

// ----- 24. Cents to price tag -----
// cents (3+ digit number like 150). s = String(cents).
// rest = s.slice(s.length - 2); dollars = s.slice(0, s.length - 2).
// Log "$" + dollars + "." + rest -> "$1.50". Test 150 and 905.

// ----- 25. Is this string a number? -----
// input (string like "42" or "hello"). if isNaN(Number(input)) -> "Invalid input";
// otherwise turn it into a number, double it, log the result. Test "21" and "abc".

/* ============================================================
   End of workbook. Nice work!
   ============================================================ */











//The two shapes:
//for (let i = 0; i < 5; i++) { ... }       // known count
//let n = 5; while (n > 0) { ...; n--; }     // until false
// ----- 1. Count up -----
// Log the numbers 1 through `maxCount`, one per line, using a for loop.
let maxCount = 10;
for (let i=1; i<=maxCount; i++){
  console.log(i);
}
// your code here
// TEST 1:  maxCount = 10  ->  1 2 3 4 5 6 7 8 9 10
// TEST 2:  maxCount = 3   ->  1 2 3
// TEST 3:  maxCount = 1   ->  1
// ----- 2. Count down -----
// Log `startNum` down to 0, then log "Liftoff!" after the loop ends.
let startNum = 3;
for (let i=startNum; i>=0; i--) {
  console.log(i);
}
console.log ("Liftoff!")
// your code here
// TEST 1:  startNum = 10  ->  10 9 8 7 6 5 4 3 2 1 0  then  Liftoff!
// TEST 2:  startNum = 3   ->  3 2 1 0  then  Liftoff!
// TEST 3:  startNum = 0   ->  0  then  Liftoff!
// ----- 3. Even numbers only -----
// Log every even number from 2 up to `evenMax`. (Step i += 2, or if (i % 2 === 0).)
let evenMax = 20;
for (let i=2; i <=evenMax; i += 2){
  console.log (i)
}
for (let i = 2; i <= evenMax; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// your code here
// TEST 1:  evenMax = 20  ->  2 4 6 8 10 12 14 16 18 20
// TEST 2:  evenMax = 10  ->  2 4 6 8 10
// TEST 3:  evenMax = 1   ->  (nothing printed)
// ----- 4. Sum 1 to max -----
// sumTotal = 0 before the loop. Add each number 1..`sumMax` to it. Log sumTotal.
let sumMax = 100;
// your code here
// TEST 1:  sumMax = 100  ->  5050
// TEST 2:  sumMax = 10   ->  55
// TEST 3:  sumMax = 1    ->  1
// ----- 5. Times table -----
// Log the `tableN` times table from "tableN x 1" to "tableN x 10", like "7 x 3 = 21".
let tableN = 7;
// your code here
// TEST 1:  tableN = 7  ->  7 x 1 = 7  ...  7 x 10 = 70
// TEST 2:  tableN = 2  ->  2 x 1 = 2  ...  2 x 10 = 20
// TEST 3:  tableN = 1  ->  1 x 1 = 1  ...  1 x 10 = 10
// ----- 6. Factorial -----
// Multiply 1*2*...*`factN` with an accumulator starting at 1. Log the result.
let factN = 5;
// your code here
// TEST 1:  factN = 5  ->  120
// TEST 2:  factN = 3  ->  6
// TEST 3:  factN = 1  ->  1
// ----- 7. Count multiples -----
// Count how many numbers from 1 to `multMax` are divisible by 3 (i % 3 === 0). Log the count.
let multMax = 50;
// your code here
// TEST 1:  multMax = 50  ->  16
// TEST 2:  multMax = 10  ->  3
// TEST 3:  multMax = 2   ->  0
// ----- 8. FizzBuzz (lite) -----
// Loop 1 to `fizzMax`. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.
let fizzMax = 20;
// your code here
// TEST 1:  fizzMax = 5   ->  1 2 Fizz 4 Buzz
// TEST 2:  fizzMax = 15  ->  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
// TEST 3:  fizzMax = 3   ->  1 2 Fizz
/* ============================================================
   PART B — WHILE LOOPS
   ============================================================ */
// ----- 9. Halve it -----
// While halveN > 1, log halveN then halve it: halveN = Math.floor(halveN / 2).
let halveN = 100;
// your code here
// TEST 1:  halveN = 100  ->  50 25 12 6 3 1
// TEST 2:  halveN = 16   ->  8 4 2 1
// TEST 3:  halveN = 1    ->  (nothing printed)
// ----- 10. Count the digits -----
// Using digitN = Math.floor(digitN / 10) in a while loop, count the digits. Log the count. (Pure math.)
let digitN = 7384;
// your code here
// TEST 1:  digitN = 7384  ->  4
// TEST 2:  digitN = 50    ->  2
// TEST 3:  digitN = 9     ->  1
// ----- 11. Sum of digits -----
// Add last digit (sumDigitN % 10) to a total, then sumDigitN = Math.floor(sumDigitN / 10). While > 0. Log total.
let sumDigitN = 1234;
// your code here
// TEST 1:  sumDigitN = 1234  ->  10
// TEST 2:  sumDigitN = 999   ->  27
// TEST 3:  sumDigitN = 5     ->  5
// ----- 12. Guess limiter -----
// While guessNum !== secretNum, log "Trying " + guessNum, then guessNum++.
// After the loop log "Found it: " + secretNum.
let secretNum = 4;
let guessNum = 1;
// your code here
// TEST 1:  secretNum = 4, guessNum = 1  ->  Trying 1 / Trying 2 / Trying 3, then  Found it: 4
// TEST 2:  secretNum = 2, guessNum = 1  ->  Trying 1, then  Found it: 2
// TEST 3:  secretNum = 1, guessNum = 1  ->  (no Trying), then  Found it: 1







