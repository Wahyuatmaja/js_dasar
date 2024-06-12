// Function javascript

// Dengan menggunakan parameter pemanggilan 
// function TambahNama(NamaDepan, NamaBelakang){
//    console.log('Nama Depan Bapaknya adalah :', NamaDepan,',Nama Belakang Bapaknya adalah :', NamaBelakang) //cara pemanggilannya
// }
//     TambahNama('Joko gobles', 'Widodo')

//Mengganti parameter dengan arguments
// function TambahNama(){
//     console.log('nama saya adalah', arguments[0], 'dan marga saya adalah', arguments[1]) // cara pemanggilannya
//  }
//      TambahNama('Joko gobles', 'Widodo') // input datanya


// Jika ingin menjadikan function menjadi variabel
// const namaLengkap = function TambahNama(NamaDepan, NamaBelakang){
//     console.log(NamaDepan, NamaBelakang) // cara pemanggilannya
//  }
//      TambahNama('Joko gobles', 'Widodo')

// Jika ingin menggunakan looping
// function TambahNama() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// TambahNama('Joko', 'gobles', 'Widodo')

// jika ingin menjadikan function sebagai variabel function baru
function addName(namaDepan, NamaBelakang) {
    console.log(namaDepan, NamaBelakang)
}
const body = document.body
const h1 = document.createElement('h1')

const sum = new Function('a', 'b', 'return a+b',) 
const total = (sum(45, 30))
h1.innerHTML = total
body.append(h1) // cara pemanggilannya ke body HTML nya 