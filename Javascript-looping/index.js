// let n = 100

// for (let i = 1; i <= n; i++) {
//     document.write('user ke - ', +i, ' <br>');
// }

// let f = 20

// for (let i = 0; i < f; i += 2) {
//     console.log(i)
// }

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(`genap ${i}`)
//     } else  {
//         console.log(`ganjil ${i}`)
//     }
// }

// let konfirmasi = confirm("Apakah anda mau mengulang?")
// let count = 0

// while (konfirmasi === true) {
//     konfirmasi = confirm("Apakah anda mau mengulang?")
//     if (konfirmasi === true) {
//         count++
//     } else {
//         alert(`Perulangan sudah dilakukan sebanyak ${count}`)
//     }
// }    


let input = prompt('Sebutkan kepanjangan dari nama IB?')

while (input) {
    if (input === "Impact Bite") {
        alert("Selamat Jawaban Kamu Benar")
        break;
    } else {
        input = prompt('Sebutkan kepanjangan dari nama IB?')
    }
}