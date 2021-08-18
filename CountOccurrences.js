function countOcuurances(str, word){
   
    let a = str.split(" ");
    let count = 0;

    for(let i =0; i < a.length; i++){
        if(word==a[i])
        count++;
    }
        return count;
}
        console.log(countOcuurances("this is javascript is is is ", "is"));