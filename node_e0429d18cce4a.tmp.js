function fac(n) {
    for (var i = 1; i < n; i++) {
        n = n*i
    }
    return n
  };
  
  console.log(fac(5));