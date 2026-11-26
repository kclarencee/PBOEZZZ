function prosesPesan(isiPesan) {
    if (typeof isiPesan === "number") {
        console.log(`kode token keamanan: ${isiPesan}`)
    } else if (typeof isiPesan === "string") {
        console.log(`pesan broadcast: ${isiPesan}`)
    } else if (typeof isiPesan === "object") {
        console.log(`dari: ${isiPesan.pengirim} ke: ${isiPesan.penerima} konten: ${isiPesan.teks}`)
    }
}

let pesan = 12345;
prosesPesan(pesan)

pesan = "jangan lupa kerjakan tugas yaa";
prosesPesan(pesan)

pesan = {pengirim: "Admin",penerima: "Mahasiswa",teks: "tugas sudah muncul"};
prosesPesan(pesan)

