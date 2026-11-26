class StafPenjualan {
    constructor(namaStaf, totalOmzet) {
        this.namaStaf = namaStaf
        this.totalOmzet = totalOmzet
    }

    hitungKomisi() {
        throw new Error("Method 'hitungKomisi' wajib diimplementasikan!")
    }
}

class SalesJunior extends StafPenjualan {
    hitungKomisi() {
        return this.totalOmzet * 0.04
    }
}

class SalesSenior extends StafPenjualan {
    hitungKomisi() {
        return this.totalOmzet * 0.08
    }
}

class SupervisorArea extends StafPenjualan {
    hitungKomisi() {
        return (this.totalOmzet * 0.12) + 1500000
    }
}

class DirekturRegional extends StafPenjualan {
    hitungKomisi() {
        return (this.totalOmzet * 0.18) + 3000000
    }
}

class MesinKomisiPenjualan {
    rekapKomisiTim(daftarStaf) {
        console.log("===== REKAP KOMISI PENJUALAN =====")

        daftarStaf.forEach(staf => {
            console.log(`Nama Staf : ${staf.namaStaf}`)
            console.log(`Total Omzet : Rp ${staf.totalOmzet}`)
            console.log(`Komisi : Rp ${staf.hitungKomisi()}`)
        });

        const totalKomisi = daftarStaf.reduce((total, staf) => total + staf.hitungKomisi(), 0
        );

        console.log(`Total Keseluruhan Anggaran Komisi : Rp ${totalKomisi}`)
    }
}

const staf1 = new SalesJunior("Bima", 20000000)
const staf2 = new SalesSenior("Laras", 50000000)
const staf3 = new SupervisorArea("Hendra", 80000000)
const staf4 = new DirekturRegional("Nadia", 150000000)

const daftarStaf = [staf1, staf2, staf3, staf4]

const mesin = new MesinKomisiPenjualan()
mesin.rekapKomisiTim(daftarStaf)