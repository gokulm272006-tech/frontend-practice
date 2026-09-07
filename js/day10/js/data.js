/**
 * JavaScript Learning Showcase - Structured Data
 * Contains complete definitions for:
 * - 11 Logical Programs (including Fibonacci)
 * - 10 Core JavaScript Topics
 * - Practiced Concepts & Badges
 * - Learning Journey Milestones
 * - Demonstrated Skills (Authentic labels: Practiced, Implemented, Hands-on)
 * - Technologies Used
 * - Featured Code Showcase Examples
 */

const projectData = {
  stats: {
    totalTasks: 21,
    logicalPrograms: 11,
    coreTopics: 10,
    modernConcepts: 19,
    vanillaJs: "100%"
  },

  logicalPrograms: [
    {
      id: "prog-01",
      number: "01",
      title: "Even Number Check",
      subtitle: "Parity verification using modulo arithmetic",
      explanation: "Evaluates whether an integer is divisible by 2 with zero remainder, returning Even or Odd.",
      concepts: ["Modulo Operator (%)", "Strict Equality (===)", "If-Else Control Flow"],
      icon: "binary",
      accent: "teal",
      problem: "Write a JavaScript program to determine whether a given integer is even or odd.",
      exampleInput: "let number = 10;",
      code: `let number = 10;

// An integer is even if remainder when divided by 2 is 0
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}`,
      output: "Even",
      notes: "The remainder operator % returns the remainder of the integer division. For negative numbers or decimals, additional validation can be added."
    },
    {
      id: "prog-02",
      number: "02",
      title: "Odd Number Check",
      subtitle: "Detecting numbers not divisible by 2",
      explanation: "Identifies odd integers by verifying the remainder when divided by 2 is non-zero.",
      concepts: ["Inequality (!==)", "Conditionals", "Arithmetic Logic"],
      icon: "hash",
      accent: "coral",
      problem: "Write a JavaScript program to verify if a given number is an odd integer.",
      exampleInput: "let num = 7;",
      code: `let num = 7;

// Check if remainder is not zero
if (num % 2 !== 0) {
  console.log("Odd Number");
} else {
  console.log("Even Number");
}`,
      output: "Odd Number",
      notes: "Using strict inequality (!==) ensures that both type and value parity checks remain robust across variable inputs."
    },
    {
      id: "prog-03",
      number: "03",
      title: "Prime Number Check",
      subtitle: "Divisibility testing with square root optimization",
      explanation: "Determines if an integer > 1 possesses strictly two positive factors: 1 and itself.",
      concepts: ["For Loop", "Math.sqrt() Optimization", "Boolean Flag", "Break Statement"],
      icon: "shield-check",
      accent: "indigo",
      problem: "Determine whether an integer greater than 1 is a prime number, optimizing search up to Math.sqrt(n).",
      exampleInput: "let num = 13;",
      code: `let num = 13;
let isPrime = num > 1;

// Only test factors up to the square root of the number
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break; // Factor found, no need to keep checking
  }
}

console.log(isPrime ? \`\${num} is Prime\` : \`\${num} is not Prime\`);`,
      output: "13 is Prime",
      notes: "Testing up to Math.sqrt(n) significantly reduces time complexity from O(n) to O(√n)."
    },
    {
      id: "prog-04",
      number: "04",
      title: "Factorial Calculation",
      subtitle: "Multiplying sequence of descending integers",
      explanation: "Calculates the mathematical product of all positive integers from 1 up to n (n!).",
      concepts: ["For Loop", "Accumulator Pattern", "Template Literals"],
      icon: "sigma",
      accent: "violet",
      problem: "Compute the factorial of a positive integer n using an iterative accumulation loop.",
      exampleInput: "let n = 5;",
      code: `let n = 5;
let factorial = 1;

// Iteratively multiply numbers from 1 to n
for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(\`Factorial of \${n} is \${factorial}\`);`,
      output: "Factorial of 5 is 120",
      notes: "By mathematical convention, factorial of 0 (0!) is defined as 1. Input can be checked for negative numbers."
    },
    {
      id: "prog-05",
      number: "05",
      title: "Fibonacci Series",
      subtitle: "Additive sequential number generation",
      explanation: "Generates the Fibonacci sequence where each successive number is the sum of the two preceding values.",
      concepts: ["Arrays", "Sequential Logic", "Dynamic Iteration", "Array.join()"],
      icon: "sparkles",
      accent: "amber",
      problem: "Generate the first N numbers of the classic Fibonacci series starting with 0 and 1.",
      exampleInput: "let count = 8;",
      code: `let count = 8;
let fib = [0, 1];

// Each subsequent element is the sum of the two preceding elements
for (let i = 2; i < count; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(\`First \${count} Fibonacci numbers: \${fib.slice(0, count).join(", ")}\`);`,
      output: "First 8 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13",
      notes: "This iterative array approach is memory safe and operates in linear O(n) time, avoiding exponential recursion costs."
    },
    {
      id: "prog-06",
      number: "06",
      title: "Palindrome Check",
      subtitle: "Symmetrical sequence verification",
      explanation: "Checks if a string or number reads identically forwards and backwards.",
      concepts: ["String Methods", "split() / reverse() / join()", "toLowerCase()"],
      icon: "repeat",
      accent: "teal",
      problem: "Verify whether a string or word reads identically in reverse order.",
      exampleInput: 'let text = "madam";',
      code: `let text = "madam";

// Convert to lowercase, split to characters, reverse array, join back
let reversed = text.toLowerCase().split("").reverse().join("");

if (text.toLowerCase() === reversed) {
  console.log(\`"\${text}" is a Palindrome\`);
} else {
  console.log(\`"\${text}" is NOT a Palindrome\`);
}`,
      output: '"madam" is a Palindrome',
      notes: "Splitting into an array allows using the native Array.prototype.reverse() method before re-joining."
    },
    {
      id: "prog-07",
      number: "07",
      title: "Reverse Number",
      subtitle: "Digit inversion using mathematical extraction",
      explanation: "Inverts the digits of an integer using modulo arithmetic and integer division.",
      concepts: ["While Loop", "Modulo Extraction (% 10)", "Math.floor()", "Numeric Reassembly"],
      icon: "rotate-ccw",
      accent: "violet",
      problem: "Reverse the numerical digits of an integer using arithmetic operations without string conversion.",
      exampleInput: "let num = 12345;",
      code: `let num = 12345;
let reversed = 0;
let temp = num;

// Extract last digit with % 10, shift reversed by * 10
while (temp > 0) {
  let remainder = temp % 10;
  reversed = (reversed * 10) + remainder;
  temp = Math.floor(temp / 10);
}

console.log(\`Original: \${num} | Reversed: \${reversed}\`);`,
      output: "Original: 12345 | Reversed: 54321",
      notes: "Pure mathematical digit extraction showcases low-level algorithmic logic without relying on string coercion."
    },
    {
      id: "prog-08",
      number: "08",
      title: "Sum of Numbers",
      subtitle: "Accumulating values from an array collection",
      explanation: "Computes the cumulative total of numeric elements stored in an array using functional reduction.",
      concepts: ["Array.reduce()", "Accumulator Pattern", "Higher Order Functions"],
      icon: "calculator",
      accent: "indigo",
      problem: "Calculate the total sum of all elements in a numbers array using modern array methods.",
      exampleInput: "const numbers = [10, 20, 30, 40, 50];",
      code: `const numbers = [10, 20, 30, 40, 50];

// Array.reduce accumulates items into a single final value
const totalSum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log("Total Sum:", totalSum);`,
      output: "Total Sum: 150",
      notes: "The reduce method provides an elegant, declarative alternative to traditional for-loops for aggregation tasks."
    },
    {
      id: "prog-09",
      number: "09",
      title: "Largest Number",
      subtitle: "Extremum search across numerical elements",
      explanation: "Scans an array of numbers to identify and return the maximum value.",
      concepts: ["Array Traversal", "Comparison Operators", "Spread Operator Math.max()"],
      icon: "trending-up",
      accent: "coral",
      problem: "Find the maximum number in an array using both iterative comparison and ES6 spread syntax.",
      exampleInput: "const scores = [45, 89, 12, 98, 63, 77];",
      code: `const scores = [45, 89, 12, 98, 63, 77];

// Method 1: Iterative search
let maxVal = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > maxVal) {
    maxVal = scores[i];
  }
}

// Method 2 (ES6+): Math.max with spread operator
const modernMax = Math.max(...scores);

console.log("Largest Number (Loop):", maxVal);
console.log("Largest Number (Spread):", modernMax);`,
      output: "Largest Number (Loop): 98\nLargest Number (Spread): 98",
      notes: "The spread operator (...) unpacks array elements directly as discrete arguments into Math.max()."
    },
    {
      id: "prog-10",
      number: "10",
      title: "Character Search",
      subtitle: "Frequency and substring occurrence scanning",
      explanation: "Searches through a text string to find and tally occurrences of a specific character.",
      concepts: ["For...of Loop", "Case Normalization", "Counter Variable"],
      icon: "search",
      accent: "teal",
      problem: "Count how many times a given target character appears within a sentence, case-insensitively.",
      exampleInput: 'let text = "JavaScript Showcase"; let target = "a";',
      code: `let text = "JavaScript Showcase";
let target = "a";
let count = 0;

// Iterate character-by-character using ES6 for...of
for (let char of text) {
  if (char.toLowerCase() === target.toLowerCase()) {
    count++;
  }
}

console.log(\`Character '\${target}' found \${count} times in "\${text}"\`);`,
      output: "Character 'a' found 4 times in \"JavaScript Showcase\"",
      notes: "Using for...of provides clean readability when looping over iterable strings and arrays without manual index tracking."
    },
    {
      id: "prog-11",
      number: "11",
      title: "Student Result",
      subtitle: "Grade determination and performance classification",
      explanation: "Aggregates subject marks, computes percentage, and assigns an academic grade category.",
      concepts: ["Multi-branch Conditionals", "Averaging Logic", "Array.reduce()"],
      icon: "award",
      accent: "amber",
      problem: "Calculate total, percentage average, and determine grade status from an array of subject scores.",
      exampleInput: "const marks = [85, 92, 78, 88, 90];",
      code: `const marks = [85, 92, 78, 88, 90];
const total = marks.reduce((sum, mark) => sum + mark, 0);
const avg = total / marks.length;

let grade = "";
let status = "Passed";

if (avg >= 90) grade = "A+";
else if (avg >= 80) grade = "A";
else if (avg >= 70) grade = "B";
else if (avg >= 60) grade = "C";
else {
  grade = "F";
  status = "Needs Improvement";
}

console.log(\`Total: \${total}/500 | Average: \${avg}% | Grade: \${grade} (\${status})\`);`,
      output: "Total: 433/500 | Average: 86.6% | Grade: A (Passed)",
      notes: "Real-world practical business logic combining aggregation, validation, and multi-tier decision boundaries."
    }
  ],

  topics: [
    {
      id: "topic-01",
      number: "01",
      title: "Variables",
      subtitle: "var, let, and const",
      description: "Fundamental memory allocation keywords. Explores scoping differences, mutability, and the Temporal Dead Zone.",
      keyConcepts: ["Block Scope", "Temporal Dead Zone", "Immutability", "Reassignment"],
      icon: "box",
      accent: "teal",
      deepDive: "JavaScript introduced `let` and `const` in ECMAScript 2015 (ES6) to fix confusing behaviors associated with legacy `var`. While `var` is function-scoped and hoisted with an initial value of undefined, `let` and `const` are strictly block-scoped `{}` and reside in a Temporal Dead Zone until initialized.",
      codeSnippet: `// Modern Variable Declarations
const appName = "JS Showcase"; // Cannot be reassigned
let taskCount = 10;            // Block-scoped, reassignable
taskCount = 20;               // Valid reassignment

const student = { name: "Ravi" };
student.role = "Learner";     // Valid: object mutation allowed!
// student = {};              // TypeError: Assignment to constant`
    },
    {
      id: "topic-02",
      number: "02",
      title: "Scope",
      subtitle: "Global, Function and Block Scope",
      description: "Rules governing variable accessibility and lexical environment resolution during code execution.",
      keyConcepts: ["Global Context", "Function Scope", "Block Boundaries", "Scope Chain"],
      icon: "layers",
      accent: "indigo",
      deepDive: "Scope determines where variables are accessible in your codebase. JavaScript has Global Scope (accessible everywhere), Function Scope (confined to function execution contexts), and Block Scope (confined inside `{}` braces for `let` and `const`). Inner scopes retain access to outer scopes via the scope chain.",
      codeSnippet: `let globalScope = "Global Access";

function evaluateScope() {
  let functionScope = "Inside Function";
  
  if (true) {
    let blockScope = "Inside Block";
    console.log(globalScope);    // Accessible
    console.log(functionScope);  // Accessible
    console.log(blockScope);     // Accessible
  }
  // console.log(blockScope);    // ReferenceError: blockScope is not defined
}`
    },
    {
      id: "topic-03",
      number: "03",
      title: "Hoisting",
      subtitle: "Understanding declaration behavior",
      description: "The mechanism where variable and function declarations are recognized before script execution begins.",
      keyConcepts: ["Creation Phase", "Execution Phase", "Function Hoisting", "TDZ"],
      icon: "arrow-up-circle",
      accent: "violet",
      deepDive: "During the engine's compilation/creation phase, memory is allocated for declarations before any code runs. Function declarations are hoisted completely with their definitions. `var` is hoisted and initialized to `undefined`. `let` and `const` are hoisted too, but remain uninitialized in the Temporal Dead Zone.",
      codeSnippet: `// Function declarations can be invoked before definition!
greet(); // Output: "Hello Developer!"

function greet() {
  console.log("Hello Developer!");
}

// Variable hoisting behavior
console.log(hoistedVar); // Output: undefined
var hoistedVar = "Defined later";

// let / const are not accessible before declaration line
// console.log(tdzVar); // ReferenceError: Cannot access before initialization
let tdzVar = "Safe declaration";`
    },
    {
      id: "topic-04",
      number: "04",
      title: "Functions",
      subtitle: "Normal and Arrow Functions",
      description: "Reusable computation blocks. Contrasts standard function syntax with ES6 arrow functions and lexical this.",
      keyConcepts: ["Arrow Syntax", "Implicit Return", "Lexical 'this'", "First-Class Objects"],
      icon: "code",
      accent: "coral",
      deepDive: "Functions in JavaScript are first-class citizens: they can be assigned to variables, passed as arguments, and returned from other functions. Arrow functions `() => {}` provide concise one-line syntax with implicit returns and lexically inherit `this` from the enclosing context.",
      codeSnippet: `// Standard Function Declaration
function multiply(a, b) {
  return a * b;
}

// Modern Arrow Function with Implicit Return
const add = (a, b) => a + b;
const square = n => n * n;

console.log("Multiply:", multiply(4, 5)); // 20
console.log("Square:", square(7));        // 49`
    },
    {
      id: "topic-05",
      number: "05",
      title: "Arrays",
      subtitle: "Creation, Access and Methods",
      description: "Ordered lists of items. Highlights indexing, iteration, and declarative transformation pipelines.",
      keyConcepts: ["map()", "filter()", "reduce()", "forEach()", "Immutability"],
      icon: "list",
      accent: "teal",
      deepDive: "Arrays in JavaScript are dynamic, ordered collections that can hold mixed data types. Modern JavaScript emphasizes functional, non-mutating transformation methods such as `map` (transform each), `filter` (select matching), and `reduce` (aggregate values) over imperative index loops.",
      codeSnippet: `const numbers = [10, 20, 30, 40, 50];

// Map: Transform values
const doubled = numbers.map(n => n * 2);

// Filter: Extract elements matching condition
const above25 = numbers.filter(n => n > 25);

// Reduce: Aggregate to single value
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log("Doubled:", doubled);   // [20, 40, 60, 80, 100]
console.log("Above 25:", above25);  // [30, 40, 50]
console.log("Sum:", total);         // 150`
    },
    {
      id: "topic-06",
      number: "06",
      title: "Objects",
      subtitle: "Properties and Object Access",
      description: "Key-value dictionaries modeling real-world entities with properties and attached member functions.",
      keyConcepts: ["Key-Value Pairs", "Dot Notation", "Bracket Notation", "Object Methods"],
      icon: "file-code",
      accent: "amber",
      deepDive: "Objects are foundational to JavaScript. Keys are string or Symbol labels mapped to any value or function. Properties can be accessed using dot notation (`obj.prop`) or dynamic bracket notation (`obj[key]`), making them ideal for dynamic data lookups.",
      codeSnippet: `const student = {
  name: "Ravi",
  age: 25,
  course: "JavaScript",
  getSummary() {
    return \`\${this.name} is enrolled in \${this.course}\`;
  }
};

console.log(student.name);          // Dot notation
console.log(student["course"]);     // Bracket notation
console.log(student.getSummary());  // Object method`
    },
    {
      id: "topic-07",
      number: "07",
      title: "Destructuring",
      subtitle: "Array and Object Destructuring",
      description: "Extracting individual values from arrays or object properties directly into clean standalone variables.",
      keyConcepts: ["Positional Extraction", "Property Matching", "Default Values", "Renaming"],
      icon: "split",
      accent: "indigo",
      deepDive: "Destructuring provides an ergonomic shorthand for extracting data. Array destructuring matches by positional index `[a, b] = arr`, while object destructuring matches by property names `{ name, age } = user`. Both support default fallback values and custom variable aliasing.",
      codeSnippet: `// Array Destructuring
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log(x, y, z); // 10, 20, 30

// Object Destructuring with Renaming & Defaults
const developer = {
  username: "gokul_dev",
  skills: ["JS", "CSS"],
  location: "Chennai"
};

const { username: handle, skills, role = "Student" } = developer;
console.log(handle); // "gokul_dev"
console.log(skills); // ["JS", "CSS"]
console.log(role);   // "Student" (default applied)`
    },
    {
      id: "topic-08",
      number: "08",
      title: "Rest & Spread",
      subtitle: "Collecting and expanding values",
      description: "The versatile triple-dot (...) operator used to pack arguments or unpack iterable collections.",
      keyConcepts: ["Rest Parameters (...args)", "Spread Syntax (...arr)", "Shallow Copy", "Immutable Merging"],
      icon: "maximize-2",
      accent: "coral",
      deepDive: "Although they share the identical `...` syntax, their roles depend on context. Rest gathers multiple comma-separated elements into a single array (frequently used in function parameter lists). Spread unpacks elements of an array or object into discrete components.",
      codeSnippet: `// Rest Operator: Gathers parameters into an array
const calculateSum = (...numbers) => {
  return numbers.reduce((sum, n) => sum + n, 0);
};
console.log(calculateSum(5, 10, 15, 20)); // 50

// Spread Operator: Expands elements
const baseConfig = { theme: "light", debug: false };
const fullConfig = { ...baseConfig, debug: true, version: "2.0" };

const listA = [1, 2];
const listB = [...listA, 3, 4]; // [1, 2, 3, 4]`
    },
    {
      id: "topic-09",
      number: "09",
      title: "Classes",
      subtitle: "Objects, Constructors and Methods",
      description: "Modern syntactic sugar over JavaScript's prototypal inheritance model for clean OOP structure.",
      keyConcepts: ["constructor()", "Class Methods", "Encapsulation", "new Keyword"],
      icon: "cpu",
      accent: "violet",
      deepDive: "ES6 classes provide a familiar, readable blueprint for creating objects. Classes feature constructor initialization, instance methods, static utility functions, and clean inheritance hierarchies using `extends` and `super()`.",
      codeSnippet: `class ShowcaseTask {
  constructor(id, title, category) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.status = "Pending";
  }

  complete() {
    this.status = "Completed";
    return \`Task "\${this.title}" is now finished!\`;
  }
}

const task = new ShowcaseTask(1, "Fibonacci Program", "Algorithms");
console.log(task.complete());
console.log("Status:", task.status); // "Completed"`
    },
    {
      id: "topic-10",
      number: "10",
      title: "DOM",
      subtitle: "Selecting and modifying HTML elements",
      description: "Connecting JavaScript logic directly to live webpage nodes, dynamic rendering, and responsive user feedback.",
      keyConcepts: ["querySelector", "textContent / innerHTML", "classList", "Event Listeners"],
      icon: "layout",
      accent: "teal",
      deepDive: "The Document Object Model (DOM) represents HTML documents as an interactive tree of objects. JavaScript can query nodes with `querySelector`, update contents, toggle style classes, append elements dynamically, and listen to user gestures via `addEventListener`.",
      codeSnippet: `// Selecting DOM elements
const button = document.querySelector("#action-btn");
const output = document.querySelector("#result-display");

// Event Listener & Dynamic UI updates
button.addEventListener("click", () => {
  output.textContent = "Logic executed successfully!";
  output.classList.add("text-emerald-700", "font-medium");
});`
    }
  ],

  conceptsList: [
    { name: "JavaScript", category: "core" },
    { name: "ES6+", category: "core" },
    { name: "Variables", category: "basics" },
    { name: "Functions", category: "basics" },
    { name: "Arrow Functions", category: "es6" },
    { name: "Arrays", category: "data" },
    { name: "Objects", category: "data" },
    { name: "Loops", category: "logic" },
    { name: "Conditions", category: "logic" },
    { name: "Destructuring", category: "es6" },
    { name: "Rest Parameters", category: "es6" },
    { name: "Spread Syntax", category: "es6" },
    { name: "Classes", category: "oop" },
    { name: "DOM", category: "browser" },
    { name: "Events", category: "browser" },
    { name: "Template Literals", category: "es6" },
    { name: "Default Parameters", category: "es6" },
    { name: "Callbacks", category: "functions" },
    { name: "Closures", category: "functions" }
  ],

  learningJourney: [
    {
      step: "01",
      title: "JavaScript Basics",
      description: "Core syntax, data types (strings, numbers, booleans), operator precedence, and variable declarations with var, let, and const.",
      badge: "Foundation"
    },
    {
      step: "02",
      title: "Conditional Logic",
      description: "Decision-making structures including if, else if, else, ternary expressions, and equality checks to solve Even/Odd, Prime, and Grading logic.",
      badge: "Branching"
    },
    {
      step: "03",
      title: "Loops & Arrays",
      description: "Repetitive execution with for, while, and for...of loops. Creating, iterating, and searching lists of items.",
      badge: "Iteration"
    },
    {
      step: "04",
      title: "Functions",
      description: "Encapsulating reusable logic using function declarations, expressions, parameters, return values, and scope resolution.",
      badge: "Modularization"
    },
    {
      step: "05",
      title: "Modern JavaScript",
      description: "Mastering ES6+ superpowers: concise arrow functions, destructuring arrays and objects, rest/spread operators, and template strings.",
      badge: "Modern ES6+"
    },
    {
      step: "06",
      title: "DOM & Events",
      description: "Transforming static HTML into interactive experiences by selecting nodes, listening to user clicks, and manipulating attributes in real-time.",
      badge: "Interactivity"
    }
  ],

  skills: [
    {
      title: "JavaScript Fundamentals",
      status: "Practiced",
      description: "Variable scoping, strict type equality, coercion rules, and control flow branching.",
      badgeColor: "teal"
    },
    {
      title: "Logical Problem Solving",
      status: "Implemented",
      description: "Step-by-step algorithmic decomposition for parity checks, prime factorials, and Fibonacci series.",
      badgeColor: "indigo"
    },
    {
      title: "ES6 Syntax & Features",
      status: "Hands-on",
      description: "Arrow function syntax, object and array destructuring, rest/spread parameters, and template literals.",
      badgeColor: "violet"
    },
    {
      title: "DOM Manipulation",
      status: "Implemented",
      description: "Querying nodes, dynamic HTML insertion, style/class toggling, and clean DOM updates.",
      badgeColor: "amber"
    },
    {
      title: "Event Handling",
      status: "Practiced",
      description: "Attaching click and input listeners, preventing defaults, and event-driven state changes.",
      badgeColor: "teal"
    },
    {
      title: "Array Handling",
      status: "Hands-on",
      description: "Iterative processing and functional methods like reduce(), map(), filter(), and slice().",
      badgeColor: "coral"
    },
    {
      title: "Object Handling",
      status: "Practiced",
      description: "Property access, method creation, nested object navigation, and dynamic property assignment.",
      badgeColor: "indigo"
    },
    {
      title: "Clean Code",
      status: "Implemented",
      description: "Meaningful naming conventions, modular separation of data and UI, and structured readability.",
      badgeColor: "violet"
    }
  ],

  technologies: [
    {
      name: "HTML5",
      category: "Markup",
      description: "Semantic page structure, accessible elements, and responsive viewport configuration.",
      icon: "file-text",
      accent: "coral"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      description: "Utility-first design, custom ivory/navy color tokens, flexbox/grid layouts, and responsive utilities.",
      icon: "palette",
      accent: "teal"
    },
    {
      name: "JavaScript (ES6+)",
      category: "Programming",
      description: "Modern ECMAScript standards, arrow functions, DOM APIs, destructuring, and algorithm implementation.",
      icon: "code-2",
      accent: "amber"
    },
    {
      name: "VS Code",
      category: "Editor",
      description: "Primary development environment with syntax highlighting, emmet, and integrated terminal.",
      icon: "terminal",
      accent: "indigo"
    },
    {
      name: "Git",
      category: "Version Control",
      description: "Local tracking of project files, iterative commits, and branching discipline.",
      icon: "git-branch",
      accent: "coral"
    },
    {
      name: "GitHub",
      category: "Repository",
      description: "Cloud hosting, remote repository sync, and developer project portfolio showcase.",
      icon: "github",
      accent: "violet"
    }
  ],

  codeShowcase: [
    {
      id: "cs-01",
      title: "Arrow Function & Implicit Return",
      subtitle: "ES6 concise function syntax",
      code: `// Traditional Function
function calculateTax(amount, rate) {
  return amount * rate;
}

// Modern ES6 Arrow Function
const calculateTaxES6 = (amount, rate) => amount * rate;

// Arrow Function with array mapping
const prices = [100, 250, 400];
const taxedPrices = prices.map(price => calculateTaxES6(price, 0.18));

console.log("Taxed Prices:", taxedPrices);`,
      explanation: "Arrow functions eliminate boilerplate keyword typing, automatically return single-line expressions without an explicit 'return' statement, and retain lexical binding of 'this'.",
      output: "Taxed Prices: [18, 45, 72]"
    },
    {
      id: "cs-02",
      title: "Array & Object Destructuring",
      subtitle: "Clean unpacking of nested data",
      code: `// Array Destructuring with Rest pattern
const metrics = [98, 85, 76, 92, 88];
const [highest, secondHighest, ...remainingScores] = metrics;

// Object Destructuring with default parameters & renaming
const studentProfile = {
  fullName: "Ravi Kumar",
  courseName: "JavaScript Masterclass",
  batch: 2026
};

const { fullName: studentName, courseName, mentor = "Self-Guided" } = studentProfile;

console.log(\`Top Score: \${highest}, Remainder Count: \${remainingScores.length}\`);
console.log(\`Student: \${studentName} | Course: \${courseName} | Mentor: \${mentor}\`);`,
      explanation: "Destructuring extracts fields directly into localized variable names, enabling concise parameter reading and reducing repetitive 'object.property' lookups.",
      output: "Top Score: 98, Remainder Count: 3\nStudent: Ravi Kumar | Course: JavaScript Masterclass | Mentor: Self-Guided"
    },
    {
      id: "cs-03",
      title: "DOM Event Listener & Dynamic UI",
      subtitle: "Connecting user actions to document mutations",
      code: `// Select interactive targets
const triggerBtn = document.querySelector("#verify-btn");
const statusBadge = document.querySelector("#status-pill");

// Register click event listener
triggerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  // Toggle status and classes dynamically
  statusBadge.textContent = "Verified Active";
  statusBadge.classList.remove("bg-slate-100", "text-slate-600");
  statusBadge.classList.add("bg-teal-50", "text-teal-700", "border-teal-200");
  
  console.log("DOM updated in response to user click.");
});`,
      explanation: "Event listeners provide non-blocking asynchronous response to user actions, bridging pure JavaScript logic with visible DOM tree manipulation.",
      output: "DOM updated in response to user click."
    }
  ]
};
