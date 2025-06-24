const name="suraj"
const repoCount=50;
console.log(name+ repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
   
const gameName =new String('Suraj');

//methods in string

let str = "  Hello JavaScript World!  ";
let str2 = "JavaScript";
console.log(str.anchor("link"));               // Deprecated: <a name="link">  Hello JavaScript World!  </a>
console.log(str.at(2));                        // 'H' (counts white space at beginning)
console.log(str.big());                        // <big>  Hello JavaScript World!  </big>
console.log(str.blink());                      // <blink>  Hello JavaScript World!  </blink>
console.log(str.bold());                       // <b>  Hello JavaScript World!  </b>
console.log(str.charAt(6));                    // 'H'
console.log(str.charCodeAt(6));                // 72 (ASCII code of 'H')
console.log(str.codePointAt(6));               // 72 (same as above, for Unicode)
console.log(str.concat(str2));                 // "  Hello JavaScript World!  JavaScript"
console.log(str.constructor);                  // ƒ String() { [native code] }
console.log(str.endsWith("World!  "));         // true
console.log(str.fixed());                      // <tt>  Hello JavaScript World!  </tt>
console.log(str.fontcolor("red"));             // <font color="red">  Hello JavaScript World!  </font>
console.log(str.fontsize("5"));                // <font size="5">  Hello JavaScript World!  </font>
console.log(str.includes("JavaScript"));       // true
console.log(str.indexOf("JavaScript"));        // 8
console.log(str.isWellFormed());               // true
console.log(str.italics());                    // <i>  Hello JavaScript World!  </i>
console.log(str.lastIndexOf("o"));             // 23
console.log(str.length);                       // 28 (spaces included)
console.log(str.link("https://example.com"));  // <a href="https://example.com">  Hello JavaScript World!  </a>
console.log(str.localeCompare(str2));          // -1 (locale-based comparison)
console.log(str.match(/Java/g));               // [ 'Java' ]
console.log([...str.matchAll(/o/g)]);          // All matches of 'o'
console.log(str.normalize());                  // "  Hello JavaScript World!  " (normalizes unicode)
console.log(str.padEnd(35, '.'));              // Pads string at end to length 35
console.log(str.padStart(35, '.'));            // Pads string at start to length 35
console.log(str.repeat(2));                    // Repeats string twice
console.log(str.replace("JavaScript", "JS"));  // "  Hello JS World!  "
console.log(str.replaceAll(" ", "_"));         // "__Hello_JavaScript_World!__"
console.log(str.search("JavaScript"));         // 8
console.log(str.slice(2, 7));                  // 'Hello'
console.log(str.small());                      // <small>  Hello JavaScript World!  </small>
console.log(str.split(" "));                   // Splits into array by space
console.log(str.startsWith("  He"));           // true
console.log(str.strike());                     // <strike>  Hello JavaScript World!  </strike>
console.log(str.sub());                        // <sub>  Hello JavaScript World!  </sub>
console.log(str.substr(2, 5));                 // 'Hello' (deprecated)
console.log(str.substring(2, 7));              // 'Hello'
console.log(str.sup());                        // <sup>  Hello JavaScript World!  </sup>
console.log(str.toLocaleLowerCase());          // all lowercase, locale-aware
console.log(str.toLocaleUpperCase());          // all uppercase, locale-aware
console.log(str.toLowerCase());                // all lowercase
console.log(str.toString());                   // returns the string itself
console.log(str.toUpperCase());                // all uppercase
console.log(str.toWellFormed());               // same as original if already well-formed
console.log(str.trim());                       // 'Hello JavaScript World!'
console.log(str.trimEnd());                    // Removes trailing spaces
console.log(str.trimLeft());                   // Removes leading spaces
console.log(str.trimRight());                  // Same as trimEnd
console.log(str.trimStart());                  // Same as trimLeft
console.log(str.valueOf());                    // Returns string primitive value
