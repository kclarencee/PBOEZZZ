class PesananDelivery {
    constructor(idPesanan, namaPelanggan, koordinatGPS) {
        this.idPesanan = idPesanan;
        this.namaPelanggan = namaPelanggan;
        this.#koordinatGPS = koordinatGPS;
        this.#saldoDeposit = 0;
        this.statusMembership = "Aktif";
    }

    #koordinatGPS;
    #saldoDeposit;

    getKoordinat3465() {
        return this.#koordinatGPS;
    }

    suspendMember3465() {
        this.statusMembership = "Dibekukan";
        console.log(`Akun ${this.namaPelanggan} dibekukan.`);
    }

    aktifkanMember3465() {
        this.statusMembership = "Aktif";
        console.log(`Akun ${this.namaPelanggan} aktif kembali.`);
    }

    topupSaldo3465(nominal) {
        this.#saldoDeposit = nominal;
        console.log(`Top-up Rp${nominal} sukses untuk ${this.namaPelanggan}.`);
        return this.#saldoDeposit;
    }

    infoMember3465() {
        console.log(`Member: ${this.namaPelanggan} | Status: ${this.statusMembership}`);
    }
}

module.exports = PesananDelivery;