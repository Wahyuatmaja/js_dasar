// let nama = "Joko"
// let usia = 25
// let tinggi = 178.5
// let berat = 60
// let pacar = 31

// if (pacar == null){
//     pacar = 'Belum punya'
// } else {
//     pacar = 'Sudah Punya'
// }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const SaldoAkhir = saldoAwal + saldoTambahan - hutang

// // switch (pacar) {
// //     case 1:
// //         pacar = 'punya 1 pacar saja'
// //         break;
// //     case 2:
// //         pacar = 'punya 2 pacar, aku cukup playboy'
// //         break;
// //     case 3:
// //         pacar = 'punya 3 pacar, aku cukup mengerikan'
// //         break;
// //     default:
// //         pacar = 'Belum punya pacar'
// //         break;
// // }

// alert(`nama saya adalah ${nama} usia saya ${usia} tinggi badan saya ${tinggi}cm berat badan saya adalah ${berat}kg dan pacar saya adalah ${pacar} ,`)

// alert(`saldo awal saya adalah Rp.${saldoAwal} dan saldo tambahan saya adalah Rp.${saldoTambahan}, jadi total saldo yang saya miliki adalah sebanyak Rp.${SaldoAkhir} `)

//Array
// let namaGuru = ['jodi', 'bunga', 'rahman']
// namaGuru.push('dea', 'fikri') //Menambahkan nama baru kedalam array
// namaGuru.shift() // menghapus array 0 pertama
// namaGuru.pop() // menghapus array terakhir
// alert(namaGuru)

//Looping
// const namaGuru = ['Joko', 'Suparman', 'Munawir', 'Ahmad Tang', 'Retno', 'Jirah']
// //console.log(namaGuru.length)
// for(let i = 0; i <= namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }


//While (Melihat kondisi terlebih dahulu baru eksekusi)
// let i = 0
// while(i < 10) {
//     i++
// console.log('Joko donk')
// } 


// DO (Lakukan terlebih dahulu baru melihat kondisi)
// let i = 20
// do {
//     i++
//     console.log('Joko donk')
// } while(i < 10)

//Tugas Kecil
/* 
1. Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. Menentukan hari dari tanggal yang ada saat ini di pc sendiri.
**/

//Hasil Tes Kecil No. 1

let saldoAwal = parseInt(prompt('Masukkan saldo awal anda', '0' ), 10)
let saldoTambahan = parseInt(prompt('Masukkan saldo tambahan anda', '0' ), 10)
const SaldoAkhir = saldoAwal + saldoTambahan
alert(`Saldo awal anda adalah Rp.${saldoAwal}, Saldo tambahan anda adalah Rp.${saldoTambahan}, Maka total saldo anda adalah Rp.${SaldoAkhir}`)


// Hasil Tes Kecil No. 2
// let hari = new Date().getDay()
// //console.log(hari)
// switch (hari) {
//     case 1:
//         hari = 'Senin'
//         break;
//     case 2:
//         hari = 'Selasa'
//         break;
//     case 3:
//         hari = 'Rabu'
//         break;
//     case 4: 
//         hari = 'Kamis'
//         break;
//     case 5:
//         hari = 'Jumat'
//         break;
//     case 6:
//         hari = 'Sabtu'
//         break;
//     case 0:
//         hari = 'Minggu'
//         break;
//     default:
//         hari = 'No Way'
//         break;
// }
// console.log(`hari ini adalah hari ${hari}`)
