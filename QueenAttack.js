

// R, C == queeen position of row and colomn
// R1, 1== opponent position of row and colomn
//queen attaks same colomn and row and diagonally position


function queenAttack(R,C,R1,C1){

    if(R==R1){
        return true;
    }
    if(C==C1){
        return true;
    }
    let D = (R-R1);
    let D1= (C-C1);
    if(D==D1)
        {
            return true;
        }

        return false;

}

    var R=5;
    var C=5;
    var R1=5;
    var C1=5;
  if(queenAttack(R,C,R1,C1)){
    
    console.log("Queen Will Attack");
  }else{
    console.log("Queen Will not Attack");
  }