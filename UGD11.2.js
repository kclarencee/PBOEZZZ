class Pelanggan {
    static jumlahPelanggan = 0
    static biayaJasa = 25000
    static jumlahServis = 0
    static totalJasa = 0
    constructor(nama, saldo) {
        this.nama = nama
        this.saldo = saldo
        Pelanggan.jumlahPelanggan++
    }

    static valid(biayaSuku) {
        return biayaSuku > 0
    }

    static hitungTotal(biayaSuku) {
        return biayaSuku + Pelanggan.biayaJasa
    }

    static cukup(pelanggan, biayaSuku) {
        if (Pelanggan.valid(biayaSuku) == false) {
            return false
        }
        return pelanggan.saldo >= Pelanggan.hitungTotal(biayaSuku)
    }

    static servis(pelanggan, biayaSuku) {
        if (Pelanggan.cukup(pelanggan, biayaSuku) == false) {
            return false
        }

        pelanggan.saldo = pelanggan.saldo - Pelanggan.hitungTotal(biayaSuku)
        Pelanggan.jumlahServis++
        Pelanggan.totalJasa = Pelanggan.totalJasa + Pelanggan.biayaJasa

        return true
    }

    ringkas() {
        console.log(this.nama + ": saldo " + this.saldo + " (biaya jasa " + Pelanggan.biayaJasa + ")")
    }

    static laporan() {
        console.log("Pelanggan: " + Pelanggan.jumlahPelanggan + " | Servis: " + Pelanggan.jumlahServis +" | Jasa: " + Pelanggan.totalJasa)
    }
}

const a = new Pelanggan("Bagas", 300000)
const b = new Pelanggan("Laras", 40000)

console.log("Servis Bagas: " + Pelanggan.servis(a, 100000))
console.log("Servis Laras: " + Pelanggan.servis(b, 100000))
console.log("Servis dengan biaya 0: " + Pelanggan.servis(a, 0))

Pelanggan.biayaJasa = 30000

console.log("Servis Bagas kedua: " + Pelanggan.servis(a, 120000))

a.ringkas()
b.ringkas()
Pelanggan.laporan()