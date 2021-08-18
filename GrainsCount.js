/* function grainsCount(){

    let result=1;
    for(let i =2; i <=64; i++){
        result = result*2;
    }

    return result;
}
console.log(grainsCount());
 */




  function grainsCount(h,v)
  {
    
    let result=1;

    v1 = h+(8*(v-1));
   
    for(let i=2; i<=v1; i++) {

        result = result*2;

    }
    return result;

}
  console.log(grainsCount(8,8));


