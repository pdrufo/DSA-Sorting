function bucketSort(arr, min, max, buckets = [], results = []) {
    for (let i = min; i <= max ; i++) {
        buckets.push([])
    }

    for (i in arr) {
        let index = arr[i]
        buckets[Math.floor((index / max) * arr.length)].push(index)
    }
  
    for (i in buckets) {
        if (buckets[i].length !== 0) {
            buckets[i].map(index => results.push(index))
        }
    }
    return results
}
console.log(bucketSort([10,12,3,8,22,4,16], 3, 22)) // 3,4,8,10,12,16,22
