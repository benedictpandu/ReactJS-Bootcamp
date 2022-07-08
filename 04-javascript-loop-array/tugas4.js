//Soal 1
for (let a = 0; a < 10; a++) {
    console.log(a)
    
}

//Soal 2
for (let b = 0; b<10; b++) {
    if (b%2!==0) {
        console.log(b)
    }
}

// Soal 3
for (let b = 0; b<10; b++) {
    if (b%2==0) {
        console.log(b)
    }
}

//Soal 4
let array1 = [1,2,3,4,5,6]
console.log(array1[5])

//Soal 5
let array2 = [5,2,4,1,3,5]
array2.sort()
console.log(array2)

//Soal 6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for (let c = 0; c < array3.length; c++) {
    console.log(array3[c])
}

//Soal 7
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (let d = 0; d < array4.length; d++) {
        if (d%2!==0) {
            console.log(array4[d])
        }
}

//Soal 8
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
var e = kalimat.join(" ")
console.log(e);

//Soal 9
var sayuran=[]
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge")
console.log(sayuran);
