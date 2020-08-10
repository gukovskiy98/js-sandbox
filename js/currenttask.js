"use strict";

// function parseClues(squareSize, isRows, clues) {
//   let resMap = new Map();

//   for (let i = 0; i < squareSize; ++i) {
//     let current = [];
//     if (isRows) {
//       current.push(clues[4 * squareSize - 1 - i]);
//       current.push(clues[squareSize + i]);
//     } else {
//       current.push(clues[i]);
//       current.push(clues[3 * squareSize - 1 - i]);
//     }
//     resMap.set(i, current);
//   }
//   return resMap;
// }

// function printResult(matrix) {
//   let length = matrix.length;
//   for (let i = 0; i < length; ++i) {
//     console.log(matrix[i]);
//   }
// }

// function addElement(
//   coordX,
//   coordY,
//   value,
//   resultMatrix,
//   hasToBeFilledInRows,
//   hasToBeFilledInColumns
// ) {
//   resultMatrix[coordX][coordY] = value;
//   hasToBeFilledInRows[coordX][value] = 0;
//   hasToBeFilledInColumns[coordY][value] = 0;
// }

// // ключи в строках, ключи в столбцах, размер матрицы, матрица, ост. числа в строках, ост. числа в столбцах
// function fillEasiest(
//   rowsClues,
//   columnsClues,
//   squareSize,
//   resultMatrix,
//   hasToBeFilledInRows,
//   hasToBeFilledInColumns
// ) {
//   // ! По строкам
//   for (let i of rowsClues.keys()) {
//     let index = rowsClues.get(i).indexOf(1);
//     if (index !== -1) {сдгуы
//       addElement(
//         i,
//         index * (squareSize - 1),
//         squareSize,
//         resultMatrix,
//         hasToBeFilledInRows,
//         hasToBeFilledInColumns
//       );
//     }

//     let index2 = rowsClues.get(i).indexOf(squareSize);
//     if (index2 === 0) {
//       for (let j = 0; j < squareSize; ++j) {
//         addElement(
//           i,
//           j,
//           j + 1,
//           resultMatrix,
//           hasToBeFilledInRows,
//           hasToBeFilledInColumns
//         );
//       }
//     }
//     if (index2 === 1) {
//       for (let j = 0; j < squareSize; ++j) {
//         addElement(
//           i,
//           squareSize - 1 - j,
//           j + 1,
//           resultMatrix,
//           hasToBeFilledInRows,
//           hasToBeFilledInColumns
//         );
//       }
//     }
//   }

//   // ! По столбцам
//   for (let i of columnsClues.keys()) {
//     let index = columnsClues.get(i).indexOf(1);
//     if (index !== -1) {
//       addElement(
//         index * (squareSize - 1),
//         i,
//         squareSize,
//         resultMatrix,
//         hasToBeFilledInRows,
//         hasToBeFilledInColumns
//       );
//     }

//     let index2 = columnsClues.get(i).indexOf(squareSize);
//     if (index2 === 0) {
//       for (let j = 0; j < squareSize; ++j) {
//         addElement(
//           j,
//           i,
//           j + 1,
//           resultMatrix,
//           hasToBeFilledInRows,
//           hasToBeFilledInColumns
//         );
//       }
//     }
//     if (index2 === 1) {
//       for (let j = 0; j < squareSize; ++j) {
//         addElement(
//           squareSize - 1 - j,
//           i,
//           j + 1,
//           resultMatrix,
//           hasToBeFilledInRows,
//           hasToBeFilledInColumns
//         );
//       }
//     }
//   }
// }

// function solvePuzzle(clues) {
//   let squareSize = Math.floor(Math.sqrt(clues.length)); // 4

//   let hasToBeFilledInRows = [],
//     hasToBeFilledInColumns = [];
//   for (let i = 0; i < squareSize; ++i) {
//     hasToBeFilledInRows[i] = [];
//     hasToBeFilledInColumns[i] = [];
//     for (let j = 1; j <= squareSize; ++j) {
//       hasToBeFilledInRows[i][j] = 1;
//       hasToBeFilledInColumns[i][j] = 1;
//     }
//   }

//   let rowsClues = parseClues(squareSize, true, clues);
//   let columnsClues = parseClues(squareSize, false, clues);

//   let resultMatrix = [];
//   for (let i = 0; i < squareSize; ++i) {
//     resultMatrix[i] = [];
//     for (let j = 0; j < squareSize; ++j) {
//       resultMatrix[i][j] = 0;
//     }
//   }

//   fillEasiest(
//     rowsClues,
//     columnsClues,
//     squareSize,
//     resultMatrix,
//     hasToBeFilledInRows,
//     hasToBeFilledInColumns
//   );

//   // ! Вывод
//   console.log("rows:");
//   console.log(rowsClues);
//   console.log("columns:");
//   console.log(columnsClues);
//   console.log("\nresultMatrix:");
//   printResult(resultMatrix);
//   console.log("\nnumsInRows");
//   printResult(hasToBeFilledInRows);
//   console.log("\nnumsInCols");
//   printResult(hasToBeFilledInColumns);
// }
// // let clues = [2, 2, 1, 3, /**/ 2, 2, 3, 1, /**/ 1, 2, 2, 3, /**/ 3, 2, 1, 3];
// let clues = [0, 0, 1, 2, /**/ 0, 2, 0, 0, /**/ 0, 3, 0, 0, /**/ 0, 1, 0, 0];

// console.log(solvePuzzle(clues));
// ! ^^ Задача про расположение домов
