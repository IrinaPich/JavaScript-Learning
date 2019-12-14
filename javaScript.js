
function isPrime(num) {
    //TODO
    if (num <2) {
    return false;
    }
  for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
    return false;
    break;
    }
    return true; 
  } 
  
  }
  isPrime(3);