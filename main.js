
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