class supir{
    nama;
    #tambahKomisi;
    constructor(nama, tambahkomisi) {
        this.nama = nama;
        this.#tambahKomisi = tambahkomisi;
    }

    tambahkomisi(){
        return this.#tambahKomisi;
    }


    getinfo() {
        console.log(`supir ${this.nama} | total komisi pivate ${this.#tambahKomisi}`)
    }
}

rental = new supir('joko', '90000')
console.log("Komisi Berhasil ditambah.");
console.log(rental.getinfo())