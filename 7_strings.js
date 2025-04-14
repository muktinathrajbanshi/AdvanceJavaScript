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

    let text = "Muktinath Rajbanshi";
    // console.log(text.indexOf("rajbanshi"));
    // console.log(text.indexOf("Rajbanshi"));

    let strArr = Array.from(text);
    // console.log(strArr);
   let strMap = strArr.map((curElem, index) => `${curElem},${index}`);
   console.log(strMap);


//? b: lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence