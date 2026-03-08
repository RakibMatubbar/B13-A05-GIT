<hr>

<br>

<h1>Answer: 01 :</h1>

<b> In JS, all three declare varibales, but they differ in <b> Scope, reassignment and hoisting behavior:</b> 

<br>

<h2>var :</h2>

<ul>
    <li><b>Function-Scoped</b>(or global if declared outside a function.)</li>
    <li>Can be redeclared and reassigned.</li>
    <li>Hoisted to the top of its scope and initialized as <b>undefined</b>, so it can be referenced before its declaration whiout throwing an error.</li>
    <li>Generally considered outdated for modern JS.</li>
</ul>

<hr>

<h2>let :</h2>

<ul>
    <li><b>Block-scoped</b>(limited to the{} it's declared in.)</li>
    <li>Can be <b>reassigned</b>, but <b>not redeclared in the same scope.</b></li>
    <li>Hoiseted but <b>not initialized -</b> accessing it before declaration throws a <b>ReferenceError</b>(the "temporal dead zone")</li>
</ul>

<hr>

<h2>const :</h2>

<ul>
    <li><b>Block-scoped</b>, like <b>let.</b></li>
    <li>Cannot be reassigned or redeclared.</li>
    <li>Must be <b>initialized ad declaration.</b></li>
    <li>The default choice when a variable won't be reassigned.</li>
</ul>

<hr>

<br>

<h1>Answer: 02 :</h1>

<p>The <b>spread operator (...)</b> "spreads" the elements of an iterable (like an array or object) into individual pieces. It is vary useful method:</p>

<h4>Example:</h4>

<b>1: Copying arrays/objects:</b>

<hr>

<pre><code>const arr = [1, 2, 3];
const copy = [...arr];

const obj = { a: 1, b: 2 };
const objCopy = { ...obj };</code></pre>

<b>2: Merging arrays/objects:</b>

<hr>

<pre><code>const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = { ...obj1, ...obj2 };</code></pre>

<b>3: And also used for:</b>

<hr>

<b>Passing array elements as function arguments.</b>
<b>Adding elements to an array/object without mutating.</b>

<hr>

<br>

<h1>Answer: 03 :</h1>

<b>All three iterate over arrays, but they differ in what they return and when you'd use them:</b>

<h2>map()</h2>

<ul>
    <li>map() : Transforms each element, returns a new array of the same length.</li>
    <li><b>Returns:</b> New array (same length) </li>
    <li><b>Use:</b>  length)Transform every element.</li>
</ul>

<hr>

<h2>filter()</h2>

<ul>
    <li>filter() : Keeps only elements that pass a test, returns a new (shorter) array.</li>
    <li><b>Returns:</b> New array (shorter/equal)</li>
    <li><b>Use:</b> Select a subset of elements</li>
</ul>

<hr>

<h2>forEach()</h2>

<ul>
    <li>forEach() : Runs a function on each element, returns <b>undefined.</b></li>
    <li><b>Returns:</b> undefined</li>
    <li><b>Use:</b> Perform side effects (logging, DOM updates, etc.)</li>
</ul>

<hr>

<h2>Example: map()</h2>

<hr>

<pre><code>const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);</code></pre>

<hr>

<h2>Example: filter()</h2>

<hr>

<pre><code>const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);</code></pre>

<h2>Example: forEach()</h2>

<hr>

<pre><code>const nums = [1, 2, 3];
nums.forEach(n => console.log(n));</code></pre>

<hr>

<br>

<h1>Answer: 04 :</h1>

<b>An arrow function is a shorter syntax for writing functions in JavaScript, introduced in ES6.</b>

<h4>Basic Syntax Cpmparision:</h4>

<p>Traditional function:</p>

<hr>

<pre><code>function add(a, b) {
  return a + b;
}</code></pre>

<p>Arrow function:</p>

<hr>

<pre><code>const add = (a, b) => a + b;</code></pre>

<h4>Other notable differences from regular functions:</h4>

<hr>

<p>No arguments object (use rest parameters ...args instead)</p>
<p>Cannot be used as constructors (can't call with new)</p>
<p>Can't be used as object methods when you need this to refer to the object</p>

<hr>

<br>

<h1>Answer: 05 :</h1>

<p>Template literals are <b>strings wrapped</b> in <b>backticks (``)</b> instead of <b>quotes " "/' '</b>, giving a cleaner way to work with strings in JavaScript.</p>

<h4>Basic syntax:</h4>

<hr>

<pre><code>const name = "Alice";

// Old:
const greeting = "Hello, " + name + "!";

// Template literal:
const greeting = `Hello, ${name}!`;</code></pre>

<b>Key features:</b>

<hr>

<ul>
    <li>Expression interpolation: embed any JS expression inside ${}</li>
    <li>Multi-line strings: line breaks are preserved without \n</li>
    <li>Nested templates: you can embed template literals inside ${}</li>
    <li>Tagged templates: an advanced feature where a function processes the template.</li>
</ul>