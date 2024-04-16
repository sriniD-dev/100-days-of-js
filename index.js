// challenge-20--15th-apr-24
// write a function to reverse a string without using any built-in methods or libraries,
// the function should take a string as input and return the reversed string.

function reverseString(inpStr){
        let r_str=""
        for(let i=inpStr.length-1;i>=0;i--){
            r_str=r_str+inpStr[i]
        }
    return r_str
}

console.log(reverseString("hello"))

// challenge-19 --16th apr-24

// write a string to check if it starts with given string
// output::true if the given string exists,or false

// using builtin methods
const startsWith=(str,subStr)=>{
    return str.toLowerCase().startsWith(subStr.toLowerCase())
}

// with out built in methods
const sliceStr=(str,subStr)=>{
    return str.toLowerCase().slice(0,subStr.length)===subStr.toLowerCase()
}

// check if its end of string
const endStrWith=(str,subStr)=>{
    return str.toLowerCase().endsWith(subStr)
}

// check if substring is anywhere in parent string
const checkSubStr=(str,subStr)=>{
    return str.toLowerCase().includes(subStr.toLowerCase())
}

console.log(startsWith("Hello world","hello"))
console.log(sliceStr("lorem ipsum ipsum lorem lorem","lorem"))
console.log(endStrWith("lorem lorem lorem ipsum ipsum ipsum ipsum","ipsum"))
console.log(checkSubStr("lorem lorem lorem ipsum ipsum ipsum ipsum","ipsum"))


// day-18
// write a function to check if a character is uppercase or lowercase

// constraints
//? the input character will be a single caracter
//? the character can be any printable ascii
//? you can assume that the input will always be a strig of length 1

//? uppercase - 65 to 90
const isUpperCase=char=>{
    if(char.charCodeAt(0)>=65&& char.charCodeAt(0)<=90){
        return true
    }
    return false
}

const isLowerCase=char=>(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)

console.log(isUpperCase("w"))
console.log(isLowerCase("J"))

// day-17
// write a function to convert a string into camelcase and snake_case
const toCamelCase=str=>{

}

function mutateString(str){
    let lowerCase=str.split(" ")
    let newArr=[]
    // console.log(lowerCase,"lowerrr")
    for(let str of lowerCase){
        let new_str=str[0].toUpperCase().concat(str.slice(1))
        newArr.push(new_str)
    }
    return newArr.join("")
    // return getStrings(arr)
}

function snake_case(str){
    let subStr=str.split(" ")
    let newArr=[]
    // console.log(lowerCase,"lowerrr")
    for(let str of subStr){
        let new_str=str[0].toUpperCase().concat(str.slice(1))
        newArr.push(new_str)
    }
    return newArr.join("_")
    // return getStrings(arr)
}



console.log(mutateString("hello world"))
console.log(snake_case("The sun dipped below the horizon painting the sky in hues of orange and pink."));


