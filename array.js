// /* 
// ARRAY
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

//Array yang tidak boleh mengubah isi original arraynya (Slice() bitCopy) 
//const arraySaya = ['Muka', 'Tangan', 'Bibir', 'Kaki', 'Telinga']
//const arrayCopy = [...arraySaya] // cara pertama
//const arrayCopy = arraySaya.slice() // cara kedua
//const arrayCopy = JSON.parse(JSON.stringify(arraySaya)) // Cara Ketiga

// arrayCopy[0] = 'Hidung'
// console.log(arraySaya)
// console.log(arrayCopy)

// Array dengan berbagai tipe data 

// const arraySaya = ['String', 10, {tomat: function(){
//     console.log('ini adalah fungsi tomat')
//     }}, 'Apel', ['Teh', 'jagung']]

// arraySaya[2].tomat() 

//Array multidimensi
// const arrayMultidimensi = ['Jaring', ['Indonesia', 'Belanda', 'Inggris'], 'Laba-laba', ['Linggis', 'Palu', 'Gergaji', 'Paku']]
// console.log(arrayMultidimensi[1][1]) // Belanda

// Menggabungkan 2 array menjadi 1
const arraySaya = ['anggur', 'pisang', 'melon']
const arrayKamu = ['apel', 'jeruk', 'semangka']

const gabungArray = arraySaya.concat(arrayKamu)
//console.log(gabungArray)

// Memecahkan data array yang banyak'
//for(list of gabungArray) console.log(list) // Untuk memanggil nama objek nya (anngur, pisang, melon ....)
//for(list in gabungArray) console.log(list) // Untuk memanggil index nya [0,1,2 ....]
//gabungArray.map((value, index) => console.log(index, value) ) // Untuk memanggil index dan objeknya

// Contoh data dari API atau JSON
const dataAPI = [{
    id: 1,
    nama: 'Anggur',
    harga: 10000
    },
{
    id: 2,
    nama: 'Pisang',
    harga: 5000
    },
{
    id: 3,
    nama: 'Melon',
    harga: 20000
    },
{
    id: 4,
    nama: 'Apel',
    harga: 15000,
    keterangan: 'Buah yang sangat segar'
    }
]

// Menampilkan berdasarkan nama
 dataAPI.map((values, index) => {
     console.log (values.nama)
})

//Mengurutkan berdasarkan harga terbesar ke yang terkecil  
dataAPI.sort((a, b) => b.harga - a.harga).map((values) => console.log(values))

//Menampilkan filter batas harga
dataAPI.filter((x) => x.harga >= 10000).map((values) => console.log(values))

//Menggabungkan sort dengan filter
dataAPI.sort((a, b) => a.harga - b.harga).filter((x) => x.harga >= 10000).map((values) => console.log(values))