const LinkedList = require('./linkedList')

function mergeSort(array) {
    // array is empty or only one index
    if (array.length <= 1) { return array }
    // declare middle, left and right of array
    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)
    // recurrsive calls on the left and right side
    left = mergeSort(left)
    right = mergeSort(right)
    count ++
    // array has been split into pairs of two and is ready to be merged
    return merge(left, right, array)
}

function merge(left, right, array) {
    //console.log('left:', left, 'right:', right)
    // set left, right and output indexes to 0
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    // while left and right indexes are less than left and right length
    while (leftIndex < left.length && rightIndex < right.length) {
    // this is where the sorting happens
    // if left index is less than array index, set left as array index
    // on first run array index is the first value (left side of array)
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        // if the right index is less than array index, set right as array index
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    // for loops below are for adding remaining values of one array
    // after the other array has been exhausted of values
    for (let i = leftIndex; i < left.length; i++) {
        //console.log('array[outputIndex]',array[outputIndex],'left[i]',left[i])
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        //console.log('array[outputIndex]',array[outputIndex],'right[i]',right[i])
        array[outputIndex++] = right[i];
    }
    //console.log('merge, array:', array, 'count:', count)
    return array;
}
let count = 0
//console.log('array:',mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])))

function linkedList() {
    const list = new LinkedList
    list.insertFirst(15)
    list.insertFirst(47)
    list.insertFirst(21)
    list.insertFirst(3)
    list.insertFirst(27)
    list.insertFirst(11)
    list.insertFirst(6)
    //list.sort()
    linkedListMerge(list)
}
linkedList()


// ***** if another student is looking at this, i'd recommend not attempting this.
// ***** no other student that I've seen has finished this and I've been trying for
// ***** over a day now. waste of time and have learned near nothing from this.

/* function linkedListMerge(list) {
    // list has only one node. already sorted
    if (!list.head.next) { return list }
    // declare middle, left and right of array
    const middle = list.findMiddle()
    let left = list.trim(middle)
    //console.log('left:',left,'left.next:', left.head.next.value)
    let right = middle
    console.log('left:', left, 'right:', right)
    left = linkedListMerge(left)
    //console.log('left:', left)
    right = linkedListMerge(right)
    console.log('right:', right)
    // array has been split into pairs of two and is ready to be merged
    return mergeLists(left, right)
} */

function mergeLists(left, right, mergeList = new LinkedList) {
    console.log('here')
    //console.log('left:', left, 'right:', right, 'mergeList:', mergeList)
    while (left !== undefined && right !== undefined) {
        //console.log(left, right)
        if (left.value < right.value) {
            mergeList.insertLast(left.value)
        }
        else { mergeList.insertLast(left.value) }
        // increment
        //console.log('mergeList:', mergeList)
        left = left.next
        right = right.next
    }
    while (left !== undefined) {
        mergeList.insertLast(left.value)
        left = left.next
    }
    while (right !== undefined) {
        mergeList.insertLast(right.value)
        right = right.next
    }
    //console.log('mergeList:', mergeList)
    return mergeList
}