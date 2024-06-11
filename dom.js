document.title ='Belajar Dom'

// //Cara mengisi element ke dalam body html
// const body = document.body

// const h1 = document.createElement('h1') // Deklarasi variabel membuat elements baru
// h1.textContent = '<marquee>Ini Joko</marquee>' // isi konten dari elements h1
 
// const namaSaya = document.createElement('p')
// namaSaya.innerHTML= '<marquee>Nama Saya Adalah Wahyu</marquee>'

// const namaKamu = document.createElement('b')
// namaKamu.innerText = '<marquee>Nama Kamu adalah Joko</marquee>'

// body.append(namaSaya)
// body.append(namaKamu)
// body.append(h1) //Menampilkan isi h1 ke dalam body html

//Selector
const btn1 = document.getElementById('btn1') // jika html button menggunakan id
const btn2 = document.querySelector('.btn2') // jika html button menggunakan class
const body = document.body // Mendeklarasikan body html

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

const newText = document.createElement('p')
newText.textContent = 'Hallo Joko! Apakabar ?'

btn1.style.border ='none'
btn1.style.padding = '8px'
btn1.style.borderRadius = '8px'
btn1.style.background = 'blue'
btn1.style.color = 'white'
btn1.style.fontSize = '12px'

// console.log(btn1)

function clickButton() {
    // console.log('aman')
    // btn1.style.border = '1px'
    // btn1.style.background = 'red'
    // btn1.style.padding = '8px'
    // btn1.style.borderRadius = '8px'
    // btn1.style.color = 'white'
    // btn1.style.fontSize = '12px'
    // console.log(btn1)
    document.body.append(newText)
}   

function ubahText() {
   btn1.textContent = 'Tekan Button'
   btn1.style.background = 'green'
   newText.style.color = 'black'
   newText.style.fontSize = '24px'
   newText.style.fontWeight = 'bold'
   
}

function oriText() {
    btn1.textContent =  defaultText
    btn1.style.background = 'blue'
    newText.style.color = 'blue'
    newText.style.fontSize= '48px'
    newText.style.fontWeight= 'bold'
    console.log(oriText)
}