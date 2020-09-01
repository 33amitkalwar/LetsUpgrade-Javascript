let arr = ['Eye','Nose','Face','Mouth','Nails'];
console.log(arr);
    var c;
    for(let i = 0; i < arr.length;i++){
       c= arr[i].search('a');
       if(c>0){
           console.log(arr[i]);
       }
    }
     