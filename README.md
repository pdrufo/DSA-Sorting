# DSA-Sorting

## Understanding merge sort
 - What is the resulting list that will be sorted after 3 recursive calls to      mergesort?
 > array: [ 1, 21, 26, 45 ] count: 3

 - What is the resulting list that will be sorted after 16 recursive calls to     mergesort?
 > Array is completely sorted by 15 calls. array: [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ] count: 15

 - What are the first 2 lists to be merged?
 > merge, array: [ 1, 21 ] count: 1 | merge, array: [ 26, 45 ] count: 2

 - Which two lists would be merged on the 7th merge?
 > left: [ 1, 21, 26, 45 ] right: [ 2, 9, 28, 29 ]

 ## Understanding quicksort
 ### after first partition: 3 9 1 14 17 24 22 20
 1. I believe that the only numbers that the pivot couldn't have been would be 3, 9, and 1. 
 
 The reason for this is because when the pivot is chosen, it puts all values smaller than pivot on left and bigger on right. As you can see the number 1 lets us know that the numbers 3, 9, and 1 are clearly meant to be on the left side as neither 3 or 9 are smaller than 1 but all are smaller than 14 and up. Now, looking at 14 and up, any of these could have been the pivot since the remainder are all in ascending order. 
 
 Remember, all numbers to the left of pivot must be less than pivot and all numbers to the right must be greater. This is true for the remainder of the numbers.

 2. show the resulting list after the second partitioning: [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
    when using last item as pivot: [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]