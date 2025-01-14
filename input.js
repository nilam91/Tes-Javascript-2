//jawaban soal no. 2 (javascript)
let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}
let totalQuantity = 0;

for (let item of productBin.data) {
if (item.productCode === "FBR00040101") {
  totalQuantity += item.quantity;
}
}

console.log(`Total quantity untuk productCode FBR00040101: ${totalQuantity}`);

//====================================================

// jawaban soal no. 1 (javascript)

// const a = require('readline');

// // Create an interface for input/output
// const rl = a.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculateSquareRoot(x) {
//     // Check for negative number
//     if (x < 0) {
//         console.error("Tidak bisa input bilangan negatif");
//         return;
//     }
    
//     // Check for odd number
//     if (x % 2 !== 0) {
//         console.error("Tidak bisa input bilangan ganjil");
//         return;
//     }
    
//     // Calculate the square root if input is valid
//     let result = Math.sqrt(x);
//     console.log("Akar pangkat 2 dari " + x + " adalah " + result);
// }

// // Prompt user for input
// rl.question('Masukkan angka: ', (input) => {
//     // Convert input to a number
//     let x = parseFloat(input);
    
//     // Check if the input is a number
//     if (isNaN(x)) {
//         console.error("Input tidak valid. Harap masukkan angka.");
//     } else {
//         calculateSquareRoot(x);
//     }
    
//     // Close the readline interface
//     rl.close();
// });