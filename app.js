// function arr(x, y) {
//   return [x, y];
// }
// console.log(arr(21, 31));

// let element = [1, 2, "Abs", "bsd"];
// let arr = element.toString();
// console.log(arr.split(","));

// -----------UY ISHI---------

// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik

// function hajm(baland, eni, uzun) {
//   let result = baland * eni * uzun;
//   console.log(result);
// }
// hajm(2, 5, 1);

// 83unksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling.

// function tengmi(soz1, soz2) {
//   soz1 = soz1.toLowerCase();
//   soz2 = soz2.toLowerCase();
//   return soz1 === soz2;
// }
// console.log(tengmi("hello", "hELLo"));

// 86.Quyidagi namunani kuzatgan holda funkisya yasang.

// function namuna(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
//   }
//   return newArr;
// }
// console.log(namuna([2, 5, 3]));

// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.

// function wordLengths(words) {
//   var lengths = [];
//   for (var i = 0; i < words.length; i++) {
//     lengths.push(words[i].length);
//   }
//   return lengths;
// }
// console.log(wordLengths(["hello", "world"]));

// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin.

// function raqam(son1, son2, son3) {
//   let natija = son1 + son2 + son3;
//   console.log(natija);
// }
// raqam(-2,84,23);

// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib

// function masofaBosibOtilgan(masofalar) {
//     var total = 0;
//     for (var i = 0; i < masofalar.length; i++) {
//         var masofa = masofalar[i];
//         if (masofa > 0) {
//             total += masofa;
//         }
//     }
//     return total;
// }
// console.log(masofaBosibOtilgan([2, 4, 2, 5]));


// 99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin.

// function Namuna(son1, son2) {
//     var massiv = [];
//     for (var i = son1 + 1; i < son2; i++) {
//         massiv.push(i);
//     }
//     return massiv;
// }
// console.log(Namuna(2, 4));
