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

