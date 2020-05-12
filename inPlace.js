function inPlace(array, start = 0, end = array.length) {
    // when are we done
    if (start >= end) { return array }
    // need partition
    let middle = partition(array, start, end)
    // divide and conquer recurrsion
    inPlace(array, start, middle)
    inPlace(array, middle + 1, end)
    return array
}

function partition(array, start, end) {
    let j = start
    let pivot = array[end - 1]
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j)
            j++
        }
    }
    // swap function
    swap(array, end - 1, j)
    return j
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(inPlace([5,18,22,13,5,0,19]))