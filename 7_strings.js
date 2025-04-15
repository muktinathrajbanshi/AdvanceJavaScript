//* ----------------------------
//* String in JavaScript
//*------------------------------

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

//Note:
// Strings created with single or double quotes works the same.
// There is no difference between the two

//* String Properties:
//? length: Property that returns the length of the string (number or characters).

    // const str = "Hello, World!";
    // console.log(str.length);
// including space n all


//* -----------------------------------
//* Escape Character
//* -----------------------------------

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special
//? characters in a string.

// Code           Result             Description
// \'               '                    Single quote
// \"               "                    Double quote
// \\               \                    Backslash

    // let text = "My name is Muktinath Rajbanshi";
    // let text = 'My name is "Muktinath Rajbanshi" and i love to eat mushroom chilly!'
    // let text = "My name is \'Muktinath Rajbanshi\' and i love to eat \"mushroom\" chilly!"

    // console.log(text);


//* ======================================
//* String Search Methods
//* ======================================

//? 2: String Search Methods
//? a: indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string,
//? or it returns -1 if the string is not found:

// syntax
// indexOf(searchString)
// indexOf(searchString, position)

    // let text = "Muktinath Rajbanshi";
    // console.log(text.indexOf("rajbanshi"));
    // console.log(text.indexOf("Rajbanshi"));

    // let strArr = Array.from(text);
    // console.log(strArr);
//    let strMap = strArr.map((curElem, index) => `${curElem},${index}`);
//    console.log(strMap);


//? b: lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello Javascript, Welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("Javascript", 40);
// console.log(index);

//? c: search(): The search() method searches a string for a string (or a regular expression) and returns the position
//? of the match.

//*Returns the index number where the first match is found. Returns -1 if no match is found

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/JavaScript/i);
// console.log(result);

//* Important Tips
// The search() method cannot take a second start position argument.

// The indexOf() method cannot take powerful search values (regular expression).

// They accept the same arguments (parameters), and return the same value

//? match() : Returns an array of the matched values or null if no match is found.

    // let text = "Hello JavaScript, welcome to our world best JavaScript course";
    // let result = text.match("Javascript");
    // let result = text.match("JavaScript");
    //todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
    // let result = text.match(/JavaScript/gi);
    // console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match.
//? Returns an empty iterator if no match is found.

    // let text = "Hello JavaScript, welcome to our world best JavaScript course";
    // let matchResult = text.matchAll("javascript");
    // let matchResult = text.matchAll("JavaScript");
    //todo here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end
    
    // console.log(...matchResult);

    // for(let item of matchResult) {
    //     console.log(item[0]);
    // }

    // for (let index of matchResult) {
    //     console.log(index.index);
    // }

    // for (let { index } of matchResult) {
    //     console.log(index);
    // }

//? includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i);
// let includeResult = text.includes("Javac");
// console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value. Otherwise it returns
//? false: 
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("welcome");
// let result = text.startsWith("Hello");
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);

// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);


//* ===================================================
//* Extracting String Parts:
//* ===================================================

//! Extracting String Parts:

//? String.prototype.substr() it is deprecated 

//? a: slice() extractes a part of a string and returns the extracted part in a new string.

//syntax
//slice(start, end);



// Todo JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best javaScript course"
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);

// subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring

//syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in
//* substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.slice(-5);
// console.log(result);

//! similarities
// todo In both the slice() and substring() methods, the end parameter indicates the ending index up to which the 
// extraction occurs, but the character at the end index is execluded from the extracted substring.


//* ==================================================
//* Interview Question
//* ==================================================
//! What is the output for the following code?

let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
let result = text.substring(1);
console.log(result);




