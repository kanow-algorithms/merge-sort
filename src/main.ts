import {SortDirection} from "./Enums";
import {isEmpty, isEvenNumber, isNullOrUndefined, shellCopy} from "./Utils";
import {isNumber} from "./Typeguards";

function mergeSort(elementsList: number[], direction: SortDirection = SortDirection.ASC): void {
    let oddElement: number | undefined = undefined;
    let left: number[] = [];
    let right: number[] = shellCopy(elementsList);
    if (right.length > 1) {
        const hasEvenCountOfElements: boolean = isEvenNumber(right.length);
        const splitPosition: number = hasEvenCountOfElements ? right.length * 0.5 : (right.length - 1) * 0.5;
        oddElement = hasEvenCountOfElements ? undefined : right.pop();
        left = right.splice(0, splitPosition);
        mergeSort(right);
        mergeSort(left);
    }
    if (oddElement) {
        left.push(oddElement);
    }
    elementsList = merge(left, right, ascendingCondition);
}

function merge(leftElements: number[], rightElements: number[], comparisionCondition: (elementA: number, elementB: number) => boolean): number[] {
    const mergedArrayLength: number = leftElements.length + rightElements.length;
    const sortingResultArray: number[] = new Array(mergedArrayLength);
    while (!isEmpty(leftElements) && !isEmpty(rightElements)) {
        if (comparisionCondition(leftElements[0], rightElements[0])) {
            const element: number | undefined = leftElements.shift();
            if (isNumber(element)) {
                sortingResultArray.push(element);
            }
        } else {
            const element: number | undefined = rightElements.shift();
            if (isNumber(element)) {
                sortingResultArray.push(element);
            }
        }
    }
    return  sortingResultArray;
}

const ascendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement > minValue;
const descendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement < minValue;


const numbers: number[] = [3, 23, 43, 67, 11, 2, 99, 54, 3];

mergeSort(numbers);
console.log(numbers);
