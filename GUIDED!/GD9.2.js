class PemutarAudio {
    putarMedia(judul) {
        console.log(`Memutar file audio lagu: ${judul}`)
    }
}

class PemutarVideo {
    putarMedia(judul) {
        console.log(`Menampilkan video film berdurasi penuh: ${judul}`)
    }
}

function jalankanMedia(player, judul) {
    player.putarMedia(judul)
}

player = new PemutarAudio() 
Judul = new PemutarVideo()
jalankanMedia(player, "fire")
jalankanMedia(Judul, "avenger")

