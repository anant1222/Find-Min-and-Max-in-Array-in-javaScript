let array  = [1,2,5,3,6,7,9,10,45,95,52]
let min; 
let max;
 min = array[0]
 max = array[0]
    for (var i = 0; i < array.length; i++) {
      if (array[i]<min ) {
        min = array[i]
      }
       if (array[i]>max ) {
        max= array[i]
      }
    }
    console.log(min)
    console.log(max)
    
   /*************** Second Methods ******************/ 
    let max2 = Math.max(...array)
    console.log(max2)
    let min2 = Math.min(...array)
    console.log(min2)
    
    /*************** Third Methods ****************/
    var max_of_array = Math.max.apply(Math,array);
    console.log(max_of_array)
     var min_of_array = Math.min.apply(Math,array);
    console.log(min_of_array)
