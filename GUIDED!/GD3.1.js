class KendaraanRental {
    merk;
    warna;
    #nomorRangka;

    constructor (merk, warna, nomorRangka) {
    this.merk = merk;
    this.warna = warna;
    this.#nomorRangka = nomorRangka;
    }

    getinfo() {
        console.log(`mobil ${this.merk} warna ${this.warna}`)
    }

    kunci() {
        return this.#nomorRangka
    }
}

function rental (merk, warna, nomorRangka) {
    return {
        merk,
        warna,
        nomorRangka,
        getinfo() {
        console.log(`mobil ${this.merk} warna ${this.warna}`)
    }
    }
}

const kendaraan = rental ('Lamborghini', 'hitam',)
const kendaraan1 = new rental ('Ferrari', 'Putih')
kendaraan.getinfo();
kendaraan1.getinfo();

const kendaraan3 = Object.create(kendaraan1)
kendaraan3.merk = 'mclaren'
kendaraan3.warna = 'merah'

console.log(kendaraan3.getinfo())
