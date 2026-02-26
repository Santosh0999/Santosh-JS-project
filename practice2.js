// console.log("All arguments:", process.argv);

// let name = process.argv[1];
// console.log("Hello", name);

// const now = new Date();

// console.log("Full Date:", now);
// console.log("Date:", now.toDateString());
// console.log("Time:", now.toTimeString());
// console.log("Year:", now.getFullYear());
// console.log("Month:", now.getMonth() + 1); // months start from 0
// console.log("Day:", now.getDate());

// // Runs once after 2 seconds
// setTimeout(() => {
//     console.log("This message appears after 2 seconds");
//   }, 2000);
  
//   // Runs every 1 second
//   let count = 1;
//   const interval = setInterval(() => {
//     console.log("Interval count:", count);
//     count++;
  
//     if (count > 5) {
//       clearInterval(interval);
//       console.log("Interval stopped");
//     }
//   }, 1000);

  const fs = require("fs");

// Create a file
fs.writeFileSync("demo.txt", "Hello from Node File System");

// Read the file
const data = fs.readFileSync("demo.txt", "utf8");
console.log("File content:", data);




  

