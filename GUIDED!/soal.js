class Pesanan {
    constructor(NamaMenu, Pelanggan, harga) {
        this.NamaMenu = NamaMenu;
        this.Pelanggan = Pelanggan;
        this.harga = harga;
    }

    getinfo() {
        console.log(`Pesanan ${this.NamaMenu} Pelanggan ${this.Pelanggan} harga ${this.harga} sedang diproses`);
    }
} 
const ayam = new Pesanan("mie", "adit", 20);
ayam.getinfo();

