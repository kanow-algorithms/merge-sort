class MergeSort {
    private static extraArray: number[];
    private static ascendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement <= minValue;
    private static descendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement >= minValue;

    public static sort(array: number[]): void {
        this.extraArray = new Array(array.length);
        this.mergeSort(array, 0, array.length - 1);
    }

    private static mergeSort(array: number[], startIndex: number, endIndex: number): void {
        if (startIndex < endIndex) {
            const middleIndex: number = startIndex + Math.floor((endIndex - startIndex) * 0.5);
            this.mergeSort(array, startIndex, middleIndex);
            this.mergeSort(array, middleIndex + 1, endIndex);
            this.merge(array, startIndex, middleIndex, endIndex);
        }
    }

    private static merge(array: number[], startIndex: number, middleIndex: number, endIndex: number): void {
        for (let i: number = startIndex; i<= endIndex; i++) {
            this.extraArray[i] = array[i];
        }
        let leftIndex: number = startIndex;
        let rightIndex: number = middleIndex + 1;
        let index: number = startIndex;
        while (leftIndex <= middleIndex && rightIndex <= endIndex) {
            if (MergeSort.ascendingCondition(this.extraArray[leftIndex], this.extraArray[rightIndex])) {
                array[index] = this.extraArray[leftIndex];
                leftIndex++;
            } else {
                array[index] = this.extraArray[rightIndex];
                rightIndex++;
            }
            index++;
        }
        while (leftIndex <= middleIndex) {
            array[index] = this.extraArray[leftIndex];
            leftIndex++;
            index++
        }
    }
}


const numbers: number[] = [3, 23, 43, 67, 11, 2, 99, 54, 3];
console.log(numbers);
MergeSort.sort(numbers);
console.log(numbers);
