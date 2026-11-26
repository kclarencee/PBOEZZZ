const ISertifikat3465 = {
    terbitkanSertifikat() {}
};

const IEvaluasi3465 = {
    nilai() {}
};

class Kursus3465 {
    constructor(judul, biaya) {
        if (new.target === Kursus3465) {
            throw new Error("Kursus adalah kelas abstrak!");
        }

        this.judul = judul;
        this.biaya = biaya;
    }

    info() {
        console.log(`${this.judul}: Rp${this.biaya.toLocaleString("id-ID")}/peserta`);
    }
}

class KursusOnline3465 extends Kursus3465 {
    hitungBiaya(jumlah) {
        return this.biaya * jumlah * 0.9;
    }

    terbitkanSertifikat(nama) {
        console.log(`Sertifikat untuk ${nama}: Kursus ${this.judul}`);
    }

    nilai(skor) {
        console.log(`Nilai ${skor}: ${skor >= 70 ? "Lulus" : "Tidak Lulus"}`);
    }
}

class KursusTatapMuka3465 extends Kursus3465 {
    hitungBiaya(jumlah) {
        return this.biaya * jumlah + 50000;
    }

    terbitkanSertifikat(nama) {
        console.log(`Sertifikat untuk ${nama}: Kursus ${this.judul}`);
    }
}

try {
    new Kursus3465("JavaScript", 300000);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

const online3465 = new KursusOnline3465("JavaScript Dasar", 300000);

online3465.info();
console.log(`Total biaya 10 peserta: Rp${online3465.hitungBiaya(10).toLocaleString("id-ID")}`);
online3465.terbitkanSertifikat("Sinta");
online3465.nilai(85);

const tatapMuka3465 = new KursusTatapMuka3465("UI Design", 500000);

tatapMuka3465.info();
console.log(`Total biaya 5 peserta: Rp${tatapMuka3465.hitungBiaya(5).toLocaleString("id-ID")}`);
tatapMuka3465.terbitkanSertifikat("Andi");

try {
    throw new Error("Metode nilai() harus diimplementasikan!");
} catch (e) {
    console.log(`Error: ${e.message}`);
}
