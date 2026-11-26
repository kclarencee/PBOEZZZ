class SukuCadang {
    constructor(nama, harga, stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
}

class Bengkel {
    static totalServis = 0;

    constructor(nama) {
        this.nama = nama;
        this.daftarSukuCadang = [];
    }

    tambahSukuCadang(sukuCadang) {
        if (sukuCadang instanceof SukuCadang) {
            this.daftarSukuCadang.push(sukuCadang);
        } else {
            throw new Error("Hanya objek SukuCadang yang dapat ditambahkan");
        }
    }

    pakai(nama, jumlah) {
        const sukuCadang = this.daftarSukuCadang.find(
            (item) => item.nama === nama
        );

        if (sukuCadang === undefined) {
            throw new Error(`Suku cadang ${nama} tidak ditemukan`);
        }

        if (sukuCadang.stok < jumlah) {
            throw new Error(`Stok ${nama} tidak mencukupi`);
        }

        sukuCadang.stok -= jumlah;
        Bengkel.totalServis;

        console.log(
            `[DIPAKAI] ${jumlah} ${nama} senilai Rp ${sukuCadang.harga * jumlah}.`
        );
    }

    static hitungNilaiStok(bengkel) {
        const total = bengkel.daftarSukuCadang.reduce(
            (sum, item) => sum + item.harga * item.stok, 0
        );

        return total;
    }
}

const bengkel1 = new Bengkel("Bengkel Maju Jaya");
const oli = new SukuCadang("Oli Mesin", 55000, 12);
const kampas = new SukuCadang("Kampas Rem", 85000, 6);

bengkel1.tambahSukuCadang(oli);
bengkel1.tambahSukuCadang(kampas);

try {
    bengkel1.pakai("Oli Mesin", 2);
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    bengkel1.pakai("Kampas Rem", 8);
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    bengkel1.pakai("Busi", 1);
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    bengkel1.tambahSukuCadang({
        nama: "Suku Cadang Palsu"
    });
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

console.log(
    "Nilai Stok Akhir: Rp " + Bengkel.hitungNilaiStok(bengkel1)
);

console.log("Total Servis Berhasil:", Bengkel.totalServis);