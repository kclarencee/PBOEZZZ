class MobilRental {
    constructor(platNomor, jenisKendaraan) {
        this.platNomor = platNomor;
        this.jenisKendaraan = jenisKendaraan;
        this.#riwayatKerusakan = "";
        this._statusRental = "Tersedia";
    }

    #riwayatKerusakan;

    sewaMobil3465() {
        this._statusRental = "Disewa";
        console.log(`Mobil ${this.platNomor} berhasil disewa.`);
    }

    kembalikanMobil3465() {
        this._statusRental = "Tersedia";
        console.log(`Mobil ${this.platNomor} telah dikembalikan.`);
    }

    catatKerusakan3465(laporan) {
        this.#riwayatKerusakan = laporan;
        return this.#riwayatKerusakan;
    }

    infoMobil3465() {
        console.log(`Plat: ${this.platNomor} | Jenis: ${this.jenisKendaraan} | Status: ${this._statusRental}`);
    }
}

const mobil13465 = new MobilRental("AA 2222 CK", "Toyota Fortuner");
const mobil23465 = new MobilRental("AD 5635 BH", "Honda HRV");
const mobil33465 = new MobilRental("B 5712 DK", "Mitsubishi Pajero");

console.log("=== DATA AWAL ===");

mobil13465.infoMobil3465();
mobil23465.infoMobil3465();
mobil33465.infoMobil3465();

console.log("=== SEWA MOBIL ===");

mobil13465.sewaMobil3465();
mobil23465.sewaMobil3465();

console.log("=== CATAT KERUSAKAN ===");

console.log(
    mobil13465.catatKerusakan3465("Lampu belakang pecah")
);

console.log("=== PENGEMBALIAN ===");

mobil13465.kembalikanMobil3465();

console.log("=== DATA AKHIR ===");

mobil13465.infoMobil3465();
mobil23465.infoMobil3465();
mobil33465.infoMobil3465();