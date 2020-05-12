function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    
    // middle is the index of where the sorting left off
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    // pivot as last item in array
    const pivot = array[end - 1];
    let j = start;
    // loop through the entire array
    for (let i = start; i < end - 1; i++) {
        // if the index that we are on is less than the pivot
        if (array[i] <= pivot) {
            // switch the values of the current index and j index
            // on first run j is equal to index 0
            swap(array, i, j);
            j++;
        }
    }
    // j should now be a larger value than the pivot
    // now we just switch the pivot and j and either the full array or first part is now sorted
    // we may need to loop around a few more times if array is not completely sorted.
    swap(array, end-1, j);
    return j;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

//console.log('array:',quickSort([3, 9, 1, 14, 17, 24, 22, 20]))
//console.log('array:',quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))