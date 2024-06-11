// /* 
// BERSENANDUNG BERSAMA ARRAY
// **/

// /* Ada 4 cara pemakaian Array **/

// // 1. Array dengan isian
// const arraySaya = ['Muka', 'Tangan', 'Bibir']
// console.log(arraySaya) 

// // 2. Array kosong dengan cara mendeklarasikan indexnya
// const arrayKamu = []
// arrayKamu[0] = 'Apel'
// arrayKamu[1] = 'Anggur'
// arrayKamu[2] = 'Mangga' 
// console.log(arrayKamu)

// // 3. Array
// const arrayKita = new Array ()
// arrayKita[0] = 'Buku'
// arrayKita[1] = 'Pensil'
// arrayKita[2] = 'Penghapus'
// console.log(arrayKita)

// // 4. Array
// const arrayMereka = new Array('Bola', 'Tikus', 'Kucing')
// console.log(arrayMereka)

// const arraySaya = ['Alpukat', 'Pear', 'Jambu', 'Semangka', 'Jeruk']
// const semangka = arraySaya.includes('Semangka')

// // console.log(posisiSemangka)
// // console.log(semangka)

// if(semangka) {
//     const posisiSemangka = arraySaya.indexOf('Semangka')
//     const indexBefore = posisiSemangka - 1
//     const indexAfter = posisiSemangka + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     const buahAwal = arraySaya.shift()
//     const buahAkhir = arraySaya.pop()

//     console.log(`Buah Semangka ada diposisi index ke ${posisiSemangka}`)
//     console.log(`Buah sebelum semangka adalah ${before}`)
//     console.log(`Buah setelah semangka adalah ${after}`)
//     console.log(`Buah Pertama adalah ${buahAwal}`)
//     console.log(`Buah Terakhir adalah ${buahAkhir}`)
// } else {
//     console.log('Buah semangka tidak ada dalam array')
// } 

// Mengubah index kunci dari Array
// const arraySaya = []
// arraySaya['A'] = 'Muka'
// arraySaya['B'] = 'Tangan'
// arraySaya['C'] = 'Bibir'
// console.log(arraySaya)

// Array yang tidak boleh mengubah isi original arraynya (Slice() bitCopy) 
// const arraySaya = ['Muka', 'Tangan', 'Bibir', 'Kaki', 'Telinga']
//const arrayCopy = [...arraySaya] // cara pertama
//const arrayCopy = arraySaya.slice() // cara kedua
//const arrayCopy = JSON.parse(JSON.stringify(arraySaya)) // Cara Ketiga

// arrayCopy[0] = 'Hidung'
// console.log(arraySaya)
// console.log(arrayCopy)

// Array dengan berbagai tipe data dan multidimensi array

const arraySaya = ['String', 10, {tomat: function(){
    console.log('ini adalah fungsi tomat')
    }}, 'Apel', ['Teh', 'jagung']]

arraySaya[2].tomat() 