class PasienRS_3465{
    constructor(namaPasien_3465,nomorKamar_3465,rekamMedisRahasia_3465){
        this.namaPasien_3465 = namaPasien_3465;
        this.nomorKamar_3465 = nomorKamar_3465;
        this.#rekamMedisRahasia_3465 = rekamMedisRahasia_3465;
        this._statusKritis_3465 = 'Stabil';
    }
    #rekamMedisRahasia_3465;

    eskalasiKritis_3465(){
        this._statusKritis_3465 = 'Krisis';
        console.log('ALERT RS: Kondisi pasien menjadi KRISIS');
    }

    pemulihanPasien_3465(){
        this._statusKritis_3465 = 'Stabil';
        console.log('ALERT RS: Kondisi pasien kembali STABIL');
    }

    getRekamMedis_3465(){
        return this.#rekamMedisRahasia_3465;
    }

    infoPasienDasar_3465(){
        console.log(`Nama pasien : ${this.namaPasien_3465}`);
        console.log(`Nomor kamar : ${this.nomorKamar_3465}`);
        console.log(`Status      : ${this._statusKritis_3465}`);
    }
}


class RawatInap_3465 extends PasienRS_3465{
    constructor(namaPasien_3465,nomorKamar_3465,rekamMedisRahasia_3465,jumlahHari_3465){
        super(namaPasien_3465,nomorKamar_3465,rekamMedisRahasia_3465);
        this.jumlahHari_3465 = jumlahHari_3465;
        this.biayaHarian_3465 = 1500000;
    }

    hitungEstimasiBiaya_3465(){
        return this.jumlahHari_3465 * this.biayaHarian_3465;
    }

    cetakRekamMedisInap_3465(){
        console.log('==============================');
        console.log('       CATATAN MEDIS RS');
        console.log('==============================');
        console.log(`Nama pasien         : ${this.namaPasien_3465}`);
        console.log(`Nomor kamar         : ${this.nomorKamar_3465}`);
        console.log(`Status              : ${this._statusKritis_3465}`);
        console.log(`Catatan (private)   : ${this.getRekamMedis_3465()}`);
        console.log(`Lama rawat          : ${this.jumlahHari_3465} hari`);
        console.log(`Total biaya         : Rp${this.hitungEstimasiBiaya_3465()}`);
        console.log('==============================');
    }
}


const pasien1_3465 = new RawatInap_3465('Budi','A12','Kanker Stadium 10',4)


console.log('=== DATA PASIEN ===')
pasien1_3465.infoPasienDasar_3465()

console.log('=== KONDISI DARURAT ===')
pasien1_3465.eskalasiKritis_3465()

pasien1_3465.cetakRekamMedisInap_3465()