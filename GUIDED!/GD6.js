class Kendaraan {
    constructor(plat, tarifPerHari) {
        if (new.target === Kendaraan) {
            throw new Error("Kendaraan adalah kelas abstrak!");
        }

        this.plat = plat;
        this.tarifPerHari = tarifPerHari;
    }

    hitungSewa(hari) {
        throw new Error("Metode hitungSewa() harus diimplementasikan!");
    }

    info(hari) {
        console.log(this.constructor.name);
        console.log("Plat: " + this.plat);
        console.log("Lama sewa: " + hari + " hari");
        console.log("Total biaya: Rp" + this.hitungSewa(hari));
    }
}

class Motor extends Kendaraan {
    hitungSewa(hari) {
        return this.tarifPerHari * hari;
    }
}

class Mobil extends Kendaraan {
    constructor(plat, tarifPerHari, denganSupir) {
        super(plat, tarifPerHari);
        this.denganSupir = denganSupir;
    }

    hitungSewa(hari) {
        let total = this.tarifPerHari * hari;

        if (this.denganSupir) {
            total = total + (150000 * hari);
        }

        return total;
    }
}

const motor = new Motor("AB 1111 AA", 50000);
const mobil = new Mobil("AB 2222 BB", 300000, true);

motor.info(2);
mobil.info(2);