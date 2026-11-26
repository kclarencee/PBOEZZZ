class Pemesanan {
    static total = 0
    static hargaTiket = 35000

    constructor(film, jumlah) {
        this.film = film;
        this.jumlah = jumlah
        Pemesanan.total++
    }

    static hitungBayar(p) {
        return p.jumlah * Pemesanan.hargaTiket
    }

    static laporan() {
        console.log(`Total pemesanan: ${Pemesanan.total} | Harga tiket: ${Pemesanan.hargaTiket}`)
    }
}

const a = new Pemesanan("Pengabdi Setan", 2)
const b = new Pemesanan("Laskar Pelangi", 4)
const c = new Pemesanan("Dilan 1990", 1)
console.log(Pemesanan.hitungBayar(a))
console.log(Pemesanan.hitungBayar(b))
console.log(Pemesanan.hitungBayar(c))
console.log(Pemesanan.laporan())