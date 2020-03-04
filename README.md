# merge-sort

## Instalation
After you clone this repo you need to move inside ```merge-sort``` directory and run command

``` npm install```

> To run ```npm install``` you must have installed **node.js**

## Description

### Example input :
```typescript
const testArray: number = [31, 41, 59, 26, 41, 58];
MergeSort.sort(testArray, SortDirection.ASC);
```
### Output of example input :
```typescript
[26, 31, 41, 41, 58, 59]
```

Static method **MergeSort.sort** of class *MergeSort* takes two parametrs:

 - **elementsList** -> it is the list which you want to sort
 - **direction** -> it is optional parameter which you can set as ```ASC``` or ```DESC``` (ASC is default option)

 > ASC (Ascending), DESC Descending)

## How it works
On this graphic you can see how **merge-sort** algortihm works :
<p align="center">
  <img src="https://i.stack.imgur.com/JuUVF.jpg=true" alt="MergeSort"/>
</p>
