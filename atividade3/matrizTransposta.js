function transporMatriz(A) {
    console.log("Matriz original:");
    console.table(A);
  
    const AT = [];
    for (let i = 0; i < A[0].length; i++) {
      AT[i] = [];
      for (let j = 0; j < A.length; j++) {
        AT[i].push(A[j][i]);
      }
    }
  
    console.log("Matriz transposta:");
    console.table(AT);
  
    return AT;
  }

const A = [[1, 2, 3], [4, 5, 6]];
transporMatriz(A);