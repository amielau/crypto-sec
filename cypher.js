let alphabetArr = ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 
'R','S', 'T', 'U','V', 'W', 'X','Y', 'Z','a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o','p', 'q', 
'r','s', 't', 'u','v', 'w', 'x','y', 'z', '!',' ', '@', '#', '$', '%', '^','&', '*', '(',')'];

function encryptString(str) {
    let encryptedStr = ''
    for (let i = 0; i < str.length; i++) {
        let key = (alphabetArr.length-1)- alphabetArr.indexOf(str[i])
        encryptedStr += alphabetArr[key]
        
    }
    return encryptedStr;
}

let test1 = "I love cryptography!"
let test2 = encryptString(test1)

console.log(encryptString(test2))



