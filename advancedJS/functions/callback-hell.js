//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript
//?  programming where multiple nested callbacks are used to handle asynchronous operations. This often 
//? results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

// write the code with me here only ok
    const getStudentData = () => {
        setTimeout(() => {
            console.log(`Hello everyone, My name is Muktinath Rajbanshi`);
            setTimeout (() => {
                console.log(`I am from Birtamode, Jhapa`);
                setTimeout(() => {
                    console.log(`I live in small village`);
                    setTimeout(() => {
                        console.log(`i like to play guitar and sing a song`);
                        setTimeout(() => {
                            console.log(`i also prefers to write a code & dance`);
                            setTimeout(() => {
                                console.log(`Actually I am a Software Engineer`);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    };
    
    getStudentData();
