
// kita akan membuat fungsi yang akan memunculkan modal

const showModal = () => {

    // kita ambil element yang akan di show

    let modal = document.querySelector('.modalMenu')

    // kita atur style dari elemnt tersebut
    // jadikan dia jadi terlihat

    modal.style.display = 'flex'

}

// kita buat fungsi hide element

const hideModal = () => {

    // kita ambil element yang akan di hilangkan

    let modal = document.querySelector('.modalMenu')

    // kita atur style dari elemnt tersebut
    // jadikan dia jadi terlihat

    modal.style.display = 'none'

}

const closeAlert = () => {

    // kita ambil element yang akan di hilangkan

    let aboutAlert = document.querySelector('.aboutAlert')

    // kita atur style dari elemnt tersebut
    // jadikan dia jadi terlihat

    aboutAlert.style.display = 'none'

}

// KITA AMBIL DULU ELEMENT YANG DIINGINKAN
let gallery = document.getElementById('wrapper_gallery')

//kita inject elementnya dengan syntax HTML
//javascript punya 3 tipe data string 
// gallery.innerHTML += `

// <img src="https://picsum.photos/seed/29/300" />

// `

//belajar fungsi pengulangan bernama "FOR" 
// FOR adalah sebauh function

for (var i = 0; i < 36; i++) {
    gallery.innerHTML += `
        <img src='https://picsum.photos/seed/${100 + i}/200' alt='gambar ${i}'/>
    `
}
