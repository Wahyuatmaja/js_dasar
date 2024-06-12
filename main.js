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
function TambahNama() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
TambahNama('Joko', 'gobles', 'Widodo')