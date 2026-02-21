let str = "!@#$%^&*()12345678asweqrfbhhyhsfyres";
let result = "";

for(let i=0; i<str.length; i++){
    let ch = str[i];

    if(
        !(( ch >= 'a' && ch <= 'z') ||
           (ch >= 'A' && ch <= 'Z') ||
           (ch >= '0' && ch <= '9'))
    ){
        result +=ch;
    }
}
console.log(result);