class DataKlaim {
    constructor(namaNasabah, nomorPolis, nominalKlaim, batasPlafon) {
        this.namaNasabah = namaNasabah
        this.nomorPolis = nomorPolis
        this.nominalKlaim = nominalKlaim
        this.batasPlafon = batasPlafon
    }
}

class ValidatorKlaim {
    validasi(klaim) {
        if (klaim.nominalKlaim <= 0 | klaim.nominalKlaim > klaim.batasPlafon) {
            throw new Error(`Klaim Rp ${klaim.nominalKlaim} melebihi batas plafon Rp ${klaim.batasPlafon} atau tidak valid!`)
        }

        return true;
    }
}

class KalkulatorKlaim {
    hitungBersih(klaim) {
        return klaim.nominalKlaim - 25000
    }
}

class KuitansiPrinter {
    cetak(klaim, danaBersih) {
        console.log("===== KUITANSI PENCAIRAN KLAIM ASURANSI =====")
        console.log(`Nama Nasabah : ${klaim.namaNasabah}`)
        console.log(`Nomor Polis  : ${klaim.nomorPolis}`)
        console.log(`Klaim Awal   : Rp ${klaim.nominalKlaim}`)
        console.log(`Dana Bersih  : Rp ${danaBersih}`)
    }
}

class KlaimRepository {
    simpan(klaim) {
        console.log(`Database ASURANSI menyimpan riwayat klaim polis ${klaim.nomorPolis} ke tabel tb_klaim...`)
    }
}

function prosesPengajuanKlaim(klaim) {
    const validator = new ValidatorKlaim()
    const kalkulator = new KalkulatorKlaim()
    const printer = new KuitansiPrinter()
    const repository = new KlaimRepository()

    try {
        validator.validasi(klaim)

        const danaBersih = kalkulator.hitungBersih(klaim)

        printer.cetak(klaim, danaBersih)
        repository.simpan(klaim)
    } catch (error) {
        console.log(`Pengajuan klaim gagal: ${error.message}`)
    }
}

const klaim1 = new DataKlaim("Raka Pratama", "POL-8821", 2000000, 5000000)

console.log("=== UJI 1 SUKSES ===")
prosesPengajuanKlaim(klaim1)

const klaim2 = new DataKlaim("Dewi", "POL-9910", 7500000, 5000000)

console.log("=== UJI 2 GAGAL VALIDASI ===")
prosesPengajuanKlaim(klaim2)