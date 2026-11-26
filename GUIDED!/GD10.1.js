class MataKuliah {
    constructor(nama, sks) {
        this.nama = nama;
        this.sks = sks;
    }
}

class KRS {
    constructor(npm) {
        this.npm = npm;
        this.daftarMatkul = [];
        KRS.totalKRS
    }

    ambilMatkul(nama, sks) {
        const matkul = new MataKuliah(nama, sks);
        this.daftarMatkul.push(matkul);
    }

    static hitungTotalSKS(krs) {
        return krs.daftarMatkul.reduce(
            (total, matkul) => total + matkul.sks, 0
        );
    }

    static getTotalKRS() {
        return KRS.totalKRS;
    }
}

const krs1 = new KRS("230711001");
krs1.ambilMatkul("Pemrograman Berorientasi Objek", 4);
krs1.ambilMatkul("Basis Data", 3);
console.log(krs1);

const krs2 = new KRS("230711002");
krs2.ambilMatkul("kewirausahaan", 3);
console.log(krs2);
console.log(`Total SKS KRS 230711001: ${KRS.hitungTotalSKS(krs1)}`);
console.log(`Jumlah KRS dibuat: ${KRS.getTotalKRS()}`);