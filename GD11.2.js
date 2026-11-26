class Pemesanan {
    static total = 0
    static hargaTiket = 35000;

    constructor(film, jumlah) {
        this.film = film
        this.jumlah = jumlah
        Pemesanan.total++
    }

    static jumlahValid(jumlah) {
        if (jumlah >= 1) {
            if (jumlah <= 10) {
                return true
            }
        }
        return false
    }

    static hitungBayar(p) {
        return p.jumlah * Pemesanan.hargaTiket
    }

    static ubahHarga(hargaBaru) {
        if (hargaBaru > 0) {
            Pemesanan.hargaTiket = hargaBaru
            return true
        }
        return false
    }

    static totalBayar(daftar) {
        return Pemesanan.hitungBayar(daftar[0]) + Pemesanan.hitungBayar(daftar[1]) + Pemesanan.hitungBayar(daftar[2])}

    static tertinggi(daftar) {
        if (Pemesanan.hitungBayar(daftar[0]) > Pemesanan.hitungBayar(daftar[1])) {
            if (Pemesanan.hitungBayar(daftar[0]) > Pemesanan.hitungBayar(daftar[2])) {
                return daftar[0].film
            }
        }

        if (Pemesanan.hitungBayar(daftar[1]) > Pemesanan.hitungBayar(daftar[2])) {
            return daftar[1].film
        }

        return daftar[2].film
    }

    static laporan() {
        console.log(`Total pemesanan: ${Pemesanan.total} | Harga tiket: ${Pemesanan.hargaTiket}`)
    }

    info() {
        console.log(`${this.film} | ${this.jumlah} tiket | ${Pemesanan.hitungBayar(this)}`)
    }
}

console.log(Pemesanan.jumlahValid(4));
console.log(Pemesanan.jumlahValid(15));

const a = new Pemesanan("Pengabdi Setan", 2);
const b = new Pemesanan("Laskar Pelangi", 4);
const c = new Pemesanan("Dilan 1990", 1);

const daftar = [a, b, c];

console.log(a.info());
console.log(b.info());
console.log(c.info());

console.log(Pemesanan.totalBayar(daftar));
console.log(Pemesanan.tertinggi(daftar));
console.log(Pemesanan.laporan());

console.log(Pemesanan.ubahHarga(-1000));
console.log(Pemesanan.totalBayar(daftar));

console.log(Pemesanan.ubahHarga(40000));
console.log(Pemesanan.totalBayar(daftar));

console.log(Pemesanan.laporan());
console.log(a.total);
