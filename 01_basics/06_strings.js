const name = "Ashish"
const repoCount = 2

//console.log(name + repoCount + "Value"); very old lets use new
//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ashish-hc-com")
/*typeof name        // "string"
typeof gameName    // "object" ← it's an object!

name == gameName   // true  (values match)
name === gameName  // false (different types!)*/
/*new String() gives you an object, which means:

It has all string methods (.toUpperCase(), .slice(), etc.)
But it's heavier in memory
Comparisons behave unexpectedly (=== fails)
Can cause bugs if you're not careful*/

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//index 2 pe which char
console.log(gameName.indexOf('s'));//at which index is s

const newString = gameName.substring(0,4)//4 not included : Ashi
console.log(newString);

const anotherString = gameName.slice(-4,6)//- me end se indexing starts
console.log(anotherString);
/* A   s   h   i   s   h
 0   1   2   3   4   5
-6  -5  -4  -3  -2  -1

So -4 means index 2 (the h).
slice(-4, 1) means: start at index 2, end at index 1
That's going backwards — start is ahead of end — so JavaScript returns "" empty string.
*/

const newStringOne = "   Ashish   "//we dont want the space
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https:/ashish.com/ashish%20Kumar"
console.log(url.replace('%20','-')) //https:/ashish.com/ashish-Kumar
console.log(url.includes('ashish'));
console.log(gameName.split('-')); //[ 'Ashish', 'hc', 'com' ]


/*
EXTRACT
.slice(s, e)★  → string :Extract from s to e (excl). Supports negative index.
.substring(s, e)  → string :Like slice, no negative index. Use slice instead.
.charAt(i)  → char :Char at index i. Same as str[i].
.at(i)★  → char :Like [i] but .at(-1) gives last char cleanly.

SEARCH
.indexOf(val)★  → number   :First index of val, or -1 if not found.
.lastIndexOf(val)  → number   :Last index of val, or -1.
.includes(val)★  → boolean   :true/false. Case sensitive.
.startsWith(val)  → boolean   :Does string begin with val?
.endsWith(val)  → boolean   :Does string end with val?
.match(regex)★  → array   :Returns matches array or null.

TRANSFORM

.toUpperCase()★  → string  :All caps.
.toLowerCase()★  → string  :All lowercase.
.trim()★  → string  :Remove whitespace from both ends.
.trimStart()  → string  :Remove whitespace from start only.
.trimEnd()  → string  :Remove whitespace from end only.
.replace(old,new)★  → string  :Replace first match only.
.replaceAll(old,new)  → string  :Replace all matches.
.split(sep)★  → array  :String → array. Use "" to split every char.
.concat(str)  → string  :Join strings. Template literals are cleaner.


Pad / repeat
.padStart(len, ch)★→ string: Pad from start to reach length. e.g. "5"→"005"
.padEnd(len, ch)→ string: Pad from end to reach length.
.repeat(n)→ string: Repeat string n times

QUICK FACTS
str.length→ number :Property, not a method. No ().
Strings are immutable : Methods return new strings, never change original.
Negative index  :Only slice() and at() support it. substring() does not.
slice(s,e) empty→ :"" ::When start >= end, result is always empty string.
typeof "hi"→ "string" ::typeof new String("hi") → "object" ⚠️*/