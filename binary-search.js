function binarySearch(array, target) {
    let left = 0;
     let right = array.length - 1; // because arrays start at 0
     let count = 0;

     while (left <= right) {
      count += 1;
       const middle = Math.floor((left + right) / 2);

      if (array[middle] === target) {
      }

      if (target > array[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    console.log('Could not find target')
 
    return 'Could not find target';
    
  }

x = binarySearch([2,3,2,4,5,6,44,55,2], 5)