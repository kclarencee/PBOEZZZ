class MobilRental {
    constructor(merk, platNomor, tahun) {
        this.merk = merk;
        this.platNomor = platNomor;
        this.tahun = tahun;
        this.statusSewa = "Tersedia";
    }

    sewaMobil() {
        this.statusSewa = "Disewa";
        console.log(`${this.merk} dengan plat ${this.platNomor} berhasil disewa.`);
    }

    kembalikanMobil() {
        this.statusSewa = "Tersedia";
        console.log(`${this.merk} dengan plat ${this.platNomor} telah dikembalikan.`);
    }

    infoMobil() {
        console.log(`Merk       : ${this.merk}`);
        console.log(`Plat Nomor : ${this.platNomor}`);
        console.log(`Tahun      : ${this.tahun}`);
        console.log("--------------------------------");
    }

    statusKetersediaan() {
        console.log(
            `${this.merk} (${this.platNomor}) : ${this.statusSewa}`
        );
    }
}

const mobil1 = new MobilRental("Lamborghini Huracan", "L 4 GN", 2022);
const mobil2 = new MobilRental("Ferrari SF90", "F 3 RI", 2023);
const mobil3 = new MobilRental("Mclaren 720s", "M 4 EN", 2021);

console.log("===== PROSES PENYEWAAN =====");

mobil1.sewaMobil();
mobil2.sewaMobil();

console.log("===== PROSES PENGEMBALIAN =====");
mobil3.kembalikanMobil();

console.log("===== INFORMASI SEMUA MOBIL =====");

mobil1.infoMobil();
mobil2.infoMobil();
mobil3.infoMobil();

console.log("===== STATUS KETERSEDIAAN =====");

mobil1.statusKetersediaan();
mobil2.statusKetersediaan();
mobil3.statusKetersediaan();