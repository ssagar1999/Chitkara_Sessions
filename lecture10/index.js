console.log('hi');


function plusOne(array){

  for (let index = array.length - 1; index >=0; index--) {
      if(array[i] < 9){
        array[i]++;
        return
      }else{
        array[i] = 0;
      }
    
  }

  array.unshift(1);
  return array;

}



function chunkify(arr, size)
{
  var newArray = [];

  for(var val of arr){
    let lastEl = newArray[newArray.length - 1];
    if(!lastEL || lastEl.length == size){
        newArray.push([val])
    }else{
      lastEl.push(val)
    }

  }
  return newArray;
}

chunkify([1,2,3,4,5,6], 2);
