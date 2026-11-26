class Buku {
    constructor(judul, penulis, jumlahHalaman) {
        this.judul = judul;
        this.penulis = penulis;
        this.jumlahHalaman = jumlahHalaman;
    }
}

class RakBuku {
    constructor(kodeRak) {
        this.kodeRak = kodeRak;
        this.daftarBuku = [];
    }

    tambahBuku(buku) {
        this.daftarBuku.push(buku);
    }

    static hitungTotalHalaman(rak) {
        return rak.daftarBuku.reduce(
            (total, buku) => total + buku.jumlahHalaman, 0
        );
    }

    static cariBukuTerTebal(rak) {
        return rak.daftarBuku.reduce(
        (tertebal, buku) => {
            if (buku.jumlahHalaman > tertebal.jumlahHalaman) {
                return buku;
            }
            return tertebal;
        });
    }
}

const rak1 = new RakBuku("RAK-A1");
const buku1 = new Buku("Dasar Pemrograman", "Sari", 320);
const buku2 = new Buku("Struktur Data", "Dimas", 410);
const buku3 = new Buku("Jaringan Komputer", "Lina", 280);
rak1.tambahBuku(buku1);
rak1.tambahBuku(buku2);
rak1.tambahBuku(buku3);
console.log(`Rak: ${rak1.kodeRak}`);
console.log(`Total halaman: ${RakBuku.hitungTotalHalaman(rak1)}`);
const bukuTebal = RakBuku.cariBukuTerTebal(rak1);
console.log(`Buku tertebal: ${bukuTebal.judul} oleh ${bukuTebal.penulis} (${bukuTebal.jumlahHalaman} halaman)`);