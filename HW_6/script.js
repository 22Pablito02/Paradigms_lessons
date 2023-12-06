function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTarget = 7;

const result = binarySearch(myArray, myTarget);

if (result !== -1) {
    console.log(`Элемент ${myTarget} найден в массиве на позиции ${result}.`);
} else {
    console.log(`Элемент ${myTarget} не найден в массиве.`);
}
