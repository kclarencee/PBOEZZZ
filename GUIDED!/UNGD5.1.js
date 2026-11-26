
class Menu {
    constructor(namaMenu, harga) {
        this.namaMenu = namaMenu;
        this.harga = harga;
    }
    caraSaji() {
        console.log("Dihidangkan di atas meja pelanggan.");
    }
}

class Makanan extends Menu {
    constructor(namaMenu, harga) {
        super(namaMenu, harga);
    }

    caraSaji() {
        console.log(`Makanan ${this.namaMenu} disajikan hangat di atas piring.`);
    }
}

class Minuman extends Menu {
    constructor(namaMenu, harga) {
        super(namaMenu, harga);
    }

    caraSaji() {
        console.log(`Minuman ${this.namaMenu} disajikan dingin di dalam gelas.`);
    }
}

const makanan1 = new Makanan("Nasi Goreng", 15000);
const minuman1 = new Minuman("Es Teh", 5000);

makanan1.caraSaji();
minuman1.caraSaji();
