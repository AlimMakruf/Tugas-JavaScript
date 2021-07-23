let pekerjaan = "HRD"

if (pekerjaan === "CEO") {
    console.log('Mempimpin perusahaan')
} else if (pekerjaan === "CTO") {
    console.log('Memimpin Teknis perusahaan')
} else if (pekerjaan === "HRD") {
    console.log('Melakukan rekuritmen untuk calon pegawai baru')
} else if (pekerjaan === "Programmer") {
    console.log('Develope website untuk perusahaan')
} else {
    console.log('tidak memiliki tugas')
}


let nilai1 = 40
let nilai2 = 30

if (nilai1 == nilai2) {
    console.log(`nilai ${nilai1} sama dengan nilai ${nilai2}`)
} else if (nilai1 <= nilai2) {
    console.log(`nilai ${nilai1} lebih kecil dari nilai ${nilai2}`)
} else if (nilai1 >= nilai2) {
    console.log(`nilai ${nilai1} lebih besar dari nilai ${nilai2}`)
}

switch (7) {
    case 1: 
        console.log('Hari Minggu')
        break;
    case 2: 
        console.log('Hari Senin')
        break;
    case 3: 
        console.log('Hari Selasa')
        break;
    case 4: 
        console.log('Hari Rabu')
        break;
    case 5: 
        console.log('Hari Kamis')
        break;
    case 6: 
        console.log('Hari Jumat')
        break;
    case 7: 
        console.log('Hari Sabtu')
        break;
        
    default:
        break;
}

let move = "UP"

switch (move) {
    case "UP":
        console.log('Karakter berjalan ke atas')
        break;
    case "DOWN":
        console.log('Karakter berjalan ke bawah')
        break;
    case "RIGHT":
        console.log('Karakter Berjalan ke kanan')
        break;
    case "LEFT":
            console.log('Karakter Berjalan ke kiri')
        break;
    default:
        break;
}