function multiply(a: number, b: number) {
    return a * b;
  }
  
  console.log(multiply(2,5))


  // the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }


  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }