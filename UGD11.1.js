class Pelanggan {
    static jumlahPelanggan = 0
    static biayaJasa = 25000
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
            return false;
        }
        return pelanggan.saldo >= Pelanggan.hitungTotal(biayaSuku);
    }
}

const a = new Pelanggan("Bagas", 400000)
const b = new Pelanggan("Laras", 90000)

console.log("Total biaya servis: " + Pelanggan.hitungTotal(80000))
console.log("Saldo Bagas mencukupi: " + Pelanggan.cukup(a, 80000))
console.log("Saldo Laras mencukupi: " + Pelanggan.cukup(b, 80000))
console.log("Validasi biaya 0: " + Pelanggan.valid(0))
console.log("Jumlah seluruh pelanggan: " + Pelanggan.jumlahPelanggan)
console.log("Jumlah pelanggan melalui objek a: " + a.jumlahPelanggan)