class Karyawan {
    constructor(nama, gajiPokok, jamLembur) {
        this.nama = nama;
        this.gajiPokok = gajiPokok
        this.jamLembur = jamLembur
    }

    hitungTotalGaji() {
        return this.gajiPokok + (this.jamLembur * 50000)
    }
}

class SlipGajiPrinter {
    cetakSlipGaji(karyawan) {
        console.log("=== SLIP GAJI KARYAWAN ===")
        console.log(`Nama       : ${karyawan.nama}`)
        console.log(`Total Gaji : Rp ${karyawan.hitungTotalGaji()}`)
    }
}

class KaryawanRepository {
    simpanDataHR(karyawan) {
        console.log(`HR DB Menyimpan arsip gaji ${karyawan.nama} ke sistem kepegawaian...`)
    }
}

const staff1 = new Karyawan("Sinta", 5000000, 4)
const printer = new SlipGajiPrinter()
const repository = new KaryawanRepository()
printer.cetakSlipGaji(staff1)
repository.simpanDataHR(staff1)

