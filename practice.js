/***********************
  1. Console Output
************************/
console.log("Hello, Node.js");

/***********************
  2. Variables & Math
************************/
let a = 10;
let b = 20;
console.log("Sum:", a + b);

/***********************
  3. Command Line Arguments
************************/
console.log("CLI Arguments:", process.argv);

/***********************
  4. Greet User from CLI
************************/
const name = process.argv[2] || "Guest";
console.log(`Hello ${name}`);

/***********************
  5. Date & Time
************************/
console.log("Current Date:", new Date().toString());

/***********************
  6. setTimeout
************************/
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

/***********************
  7. setInterval
************************/
let count = 0;
const interval = setInterval(() => {
  console.log("Interval running...");
  count++;
  if (count === 3) clearInterval(interval);
}, 1000);

/***********************
  8–13. File System Ops
************************/
const fs = require("fs");

// Create file
fs.writeFileSync("test.txt", "Hello File System");

// Read file
const fileData = fs.readFileSync("test.txt", "utf8");
console.log("File content:", fileData);

// Append file
fs.appendFileSync("test.txt", "\nAppended text");

// Read directory
console.log("Directory files:", fs.readdirSync("./"));

// Create folder
if (!fs.existsSync("myFolder")) {
  fs.mkdirSync("myFolder");
}

// Delete file
// fs.unlinkSync("test.txt"); // Uncomment to delete

/***********************
  14–15. HTTP Server
************************/
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("404 Page");
  }
});

server.listen(3000, () => {
  console.log("HTTP Server running on port 3000");
});

/***********************
  16–17. JSON Handling
************************/
const user = { name: "Alex", age: 22 };
const jsonData = JSON.stringify(user);
console.log("JSON String:", jsonData);

const parsedData = JSON.parse(jsonData);
console.log("Parsed Name:", parsedData.name);

/***********************
  18. Promise
************************/
const myPromise = new Promise(resolve => {
  resolve("Promise resolved successfully");
});

myPromise.then(console.log);

/***********************
  19. Async / Await
************************/
function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

async function asyncTask() {
  await delay();
  console.log("Async/Await completed");
}
asyncTask();

/***********************
  20. Environment Variable
************************/
console.log("PORT from env:", process.env.PORT || "Not Set");
