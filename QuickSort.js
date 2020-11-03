function pivot(arr ,start = 0 , end = arr.length -1){
    function swap (array , i , j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    var pivot = arr[start];
    var pivotIndex = start;

    for(var i = start +1  ; i < arr.length ; i ++){
        if( pivot > arr[i]){
            
            pivotIndex ++;
            swap(arr , pivotIndex , i);
            console.log(arr);
        }
    }

   
    swap(arr , start , pivotIndex);

    return pivotIndex;
}


console.log(pivot([0,2,1,3,5,4,7]));