function merge(arr1 , arr2){
    var arr =[];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
            if(arr1[i] < arr2[j]){
                arr.push(arr1[i]);
                i++;
            }else{
                arr.push(arr2[j]);
                j++;
            }
          }
    while(i < arr1.length){
        arr.push(arr1[i]);
        i++;
    }
  while(j < arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

var res = [];
function arrayBreaker(arr){
    if(arr.length <=1 ) return arr;

    var len = arr.length;
    var left = arrayBreaker(arr.slice(0,len/2));
    var right = arrayBreaker(arr.slice(len/2));

    return merge(left , right);

}



//console.log(merge([100],[1,3,6,7,10]));

console.log(arrayBreaker([10,21,34,22,44,2,1]));
//console.log(res);