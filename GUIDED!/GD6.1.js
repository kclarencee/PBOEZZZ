const IDapatDiatur = {
    atur(nilai) {
        throw new Error("Metode atur() harus diimplementasikan!");
    }
};

const IPenjadwalan = {
    jadwalkan(jam) {
        throw new Error("Metode jadwalkan() harus diimplementasikan!");
    }
};

class Perangkat {
    constructor(nama) {
        if (new.target === Perangkat) {
            throw new Error("Perangkat adalah kelas abstrak!");
        }

        this.nama = nama;
        this.aktif = false;
    }

    status() {
        throw new Error("Metode status() harus diimplementasikan!");
    }

    nyalakan() {
        this.aktif = true;
        return this.nama + " dinyalakan.";
    }

    matikan() {
        this.aktif = false;
        return this.nama + " dimatikan.";
    }
}

class Lampu extends Perangkat {
    constructor(nama, kecerahan) {
        super(nama);
        this.kecerahan = kecerahan;
    }

    status() {
        return this.nama + ": " + this.aktif + ", kecerahan " + this.kecerahan + "%";
    }

    atur(nilai) {
        this.kecerahan = nilai;
        return "Kecerahan lampu diatur menjadi " + nilai + "%";
    }

    jadwalkan(jam) {
        return "Lampu dijadwalkan pukul " + jam;
    }
}

class AC extends Perangkat {
    constructor(nama, suhu) {
        super(nama);
        this.suhu = suhu;
    }

    status() {
        return this.nama + ": " + this.aktif + ", suhu " + this.suhu + "°C";
    }

    atur(nilai) {
        this.suhu = nilai;
        return "Suhu AC diatur menjadi " + nilai + "°C";
    }

    jadwalkan(jam) {
        return "AC dijadwalkan pukul " + jam;
    }
}

const lampu = new Lampu("Lampu Kamar", 70);
const ac = new AC("AC Ruang Tamu", 24);

const perangkat = [lampu, ac];

console.log(lampu.atur(90));
console.log(lampu.jadwalkan("18:00"));

console.log(ac.atur(20));
console.log(ac.jadwalkan("21:00"));

console.log(lampu.matikan());
console.log(ac.matikan());