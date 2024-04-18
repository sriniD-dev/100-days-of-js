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

//day-21
// write a function called calculatedMen that takes an array of numbers as input and returns the mean (average) of those numbers

// ToDo::: In math,the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbers.
// method-1
function calculatedMean(arr){
    if(arr.length===0){
        console.log("length is zero")
        return 0
    }else {
        let numAvg=arr.reduce((acc,cur)=>acc+cur)
        console.log((numAvg/arr.length),numAvg,"avergae-mean")
        return numAvg/(arr.length)
    }
}

console.log(calculatedMean([1,2,3,4,5]))
console.log(calculatedMean([10,20,30]))
console.log(calculatedMean([-1,0,1]))
console.log(calculatedMean([-1,0,1,0,-10]))
console.log(calculatedMean([]))

const avgMean=(arr)=>{
    if(arr.length==0){
        return 0
    }else {
        let acc=0
      arr.forEach((element,index,arr) => {
        console.log(element,"element")
           acc=acc+element
        });
        console.log((acc/(arr.length)),acc,arr.length,"<----average-mean---->")
        return acc/(arr.length)
    }
}

console.log(avgMean([10,20,30]))
console.log(avgMean([-1,0,1,2,3]))
console.log(avgMean([-1,0,1,0,-10]))

// day-22
// write a javascript function findMedian(arr) tht takes an array of numbers as input and returns the median value.if the array has even number of elements,return the average of the two middle values::so the median of 3,5,7,9 is (5+7)/2
// if arr is 3,3,5,9,15  is 5

function findMedian(arr){
    const toSort=arr.sort((a,b)=>a-b)
    console.log(toSort,"toSort")
    let midValue=Math.floor(arr.length/2)
    console.log(Math.floor(midValue),midValue,"midValue")
    if((arr.length%2)===0){ //even array
        console.log("median---",arr[midValue],arr[midValue-1],((arr[midValue]+arr[midValue-1])/2))
        return median =((arr[midValue-1]+arr[midValue])/2)
    }else {
        console.log("median---",arr[midValue])
        return median=arr[midValue]
    }
}

console.log(findMedian([3,5,9,2,15]))
console.log(findMedian([3,5,7,9]))
console.log(findMedian([1,3,5,7,9,11,-1,-11,-12,0]))