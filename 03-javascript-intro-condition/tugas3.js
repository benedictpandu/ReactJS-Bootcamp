//Soal 1
let namaLengkap = "Benediktus Pandu B";

console.log(namaLengkap)

//Soal 2
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let outputGabunganVariable = word + " " + second + " " + third;

console.log(outputGabunganVariable)

//Soal 3
const hello = 'Hello '; 
const world = 'World!!'; 
const output = `${hello} ${world}`

console.log(output)

//Soal 4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * ( parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang) );

console.log(kelilingPersegiPanjang)

//Soal 5
let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(4, 14);; // do your own! 
let thirdWords= sentences.substring(15, 18);; // do your own! 
let fourthWords= sentences.substring(19, 24);; // do your own! 
let fifthWords= sentences.substring(25, 31);; // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

//Soal 6
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0]; 
var exampleSecondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord = sentence[11] + sentence[12];// lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord = sentence[26] + sentence[27] + sentence [28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//Soal 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17); 

console.log(hasil)

//Soal 8 
var nilaiDoe = 50;
if (nilaiDoe >= 80) {
    console.log("A")
} else if(nilaiDoe >= 70 && nilaiDoe < 80) {
    console.log("B")
} else if(nilaiDoe >= 60 && nilaiDoe < 70) {
    console.log("C")
} else if(nilaiDoe >= 50 && nilaiDoe < 60) {
    console.log("D")
} else {
    console.log("E")
}

//Soal 9
let angka = 2
var jawab = angka === 2 ? "angka nya 2" : "bukan angka 2"
console.log(jawab)

//Soal 10
var traffic_lights = "red";
switch(traffic_lights){
    case "red" : {console.log("Berhenti"); break;}
    case "yellow" : {console.log("Hati-Hati"); break;}
    case "green" : {console.log("Berjalan"); break;}
}