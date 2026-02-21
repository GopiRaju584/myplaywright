for(let num=2; num<=100; num++){
    let isprime = true;

    for(let i=2; i<=num/2; i++){
        if(num%2 === 0){
            isprime = false;
            break;
        }
    }
    if(isprime){
        console.log(num);
    }
};