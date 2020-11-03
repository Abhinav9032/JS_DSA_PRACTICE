function getDigit(num , pos){

    var digit = Math.floor( num / Math.pow(10 , pos)) % 10;
    console.log(digit);
}

getDigit(395485829,0);