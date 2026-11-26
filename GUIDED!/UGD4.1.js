class Logistik_3465{
    constructor(resi_3465,kotaTujuan_3465,manifestGudang_3465){
        this.resi_3465 = resi_3465;
        this.kotaTujuan_3465 = kotaTujuan_3465;
        this.#manifestGudang_3465 = manifestGudang_3465;
        this._statusKurir_3465 = 'Standby'
    }
    #manifestGudang_3465;

    mulaiPengiriman_3465(){
        this._statusKurir_3465 = 'Dalam Perjalanan'
        console.log(`[LOGISTIK] Paket resi ${this.resi_3465} menuju ${this.kotaTujuan_3465} sedang dikirim.`)
    }

    selesaikanPengiriman_3465(){
        this._statusKurir_3465 = 'Terkirim'
        console.log(`[LOGISTIK] Paket resi ${this.resi_3465} telah sampai tujuan.`)
    }

    getManifest_3465(){
        return this.#manifestGudang_3465
    }

    infoDasar_3465(){
        console.log(`Resi: ${this.resi_3465}`)
        console.log(`Tujuan: ${this.kotaTujuan_3465}`)
        console.log(`Status: ${this._statusKurir_3465}`)
    }
}

class Darat_3465 extends Logistik_3465{
    constructor(resi_3465,kotaTujuan_3465,manifestGudang_3465,platNomor_3465){
        super(resi_3465,kotaTujuan_3465,manifestGudang_3465)
        this.platNomor_3465 = platNomor_3465
    }

    cekJalurDarat_3465(){
        return 'Armada Darat'
    }
}

class Udara_3465 extends Logistik_3465{
    constructor(resi_3465,kotaTujuan_3465,manifestGudang_3465,kodePenerbangan_3465){
        super(resi_3465,kotaTujuan_3465,manifestGudang_3465)
        this.kodePenerbangan_3465 = kodePenerbangan_3465
    }

    cekJalurUdara_3465(){
        return 'Maskapai Penerbangan'
    }
}

class KargoDarurat_3465 extends Darat_3465{
    constructor(resi_3465,kotaTujuan_3465,manifestGudang_3465,platNomor_3465,beratMuatan_3465){
        super(resi_3465,kotaTujuan_3465,manifestGudang_3465,platNomor_3465)
        this.beratMuatan_3465 = beratMuatan_3465
    }

    hitungRisiko_3465(){
        return 'Risiko (Perlu Pengawalan)'
    }

    infoLengkap_3465(){
        console.log('')
        console.log('--- KELAS KARGO DARURAT ---')
        console.log(`Resi                         : ${this.resi_3465}`)
        console.log(`Tujuan                       : ${this.kotaTujuan_3465}`)
        console.log(`Jalur                        : ${this.cekJalurDarat_3465()}`)
        console.log(`Plat Nomor                   : ${this.platNomor_3465}`)
        console.log(`Berat Muatan                 : ${this.beratMuatan_3465} Kg`)
        console.log(`Analisis                     : ${this.hitungRisiko_3465()}`)
        console.log(`Status Operasional           : ${this._statusKurir_3465}`)
        console.log(`Manifest Gudang (private)    : ${this.getManifest_3465()}`)
    }
}

class KargoKilat_3465 extends Udara_3465{
    constructor(resi_3465,kotaTujuan_3465,manifestGudang_3465,kodePenerbangan_3465,estimasiJam_3465){
        super(resi_3465,kotaTujuan_3465,manifestGudang_3465,kodePenerbangan_3465)
        this.estimasiJam_3465 = estimasiJam_3465
    }

    kalkulasiPrioritas_3465(){
        return 'VIP'
    }

    infoLengkap_3465(){
        console.log('')
        console.log('--- KELAS KARGO KILAT UDARA ---')
        console.log(`Resi                           : ${this.resi_3465}`)
        console.log(`Tujuan                         : ${this.kotaTujuan_3465}`)
        console.log(`Jalur                          : ${this.cekJalurUdara_3465()}`)
        console.log(`Kode Penerbangan               : ${this.kodePenerbangan_3465}`)
        console.log(`Estimasi Tiba                  : ${this.estimasiJam_3465} Jam`)
        console.log(`Layanan                        : ${this.kalkulasiPrioritas_3465()}`)
        console.log(`Status Operasional             : ${this._statusKurir_3465}`)
        console.log(`Manifest Gudang (private)      : ${this.getManifest_3465()}`)
    }
}

const kargoDarurat_3465 = new KargoDarurat_3465('DRT-26263','Bali','MNF-BLI-02','AH 3653 XY',340)
const kargoKilat_3465 = new KargoKilat_3465('UDR-77354','Jakarta','MNF-JKT-06','BH-634',6)

console.log('=== UJI PROGRAM KASUS 1: LOGISTIK ===')
kargoDarurat_3465.mulaiPengiriman_3465()
kargoKilat_3465.mulaiPengiriman_3465()
kargoKilat_3465.selesaikanPengiriman_3465()
kargoDarurat_3465.infoLengkap_3465()
kargoKilat_3465.infoLengkap_3465()