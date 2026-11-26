class Terminal {
    constructor(kode, kapasitas) {
        this.kode = kode;
        this.kapasitas = kapasitas;
    }
}

class Maskapai {
    constructor(nama, kodeMaskapai) {
        this.nama = nama;
        this.kodeMaskapai = kodeMaskapai;
    }
}

class Bandara {
    static totalBandara = 0;

    constructor(nama) {
        this.nama = nama;
        this.daftarTerminal = [];
        this.daftarMaskapai = [];
        Bandara.totalBandara++;
    }

    bangunTerminal(kode, kapasitas) {
        const terminal = new Terminal(kode, kapasitas);
        this.daftarTerminal.push(terminal);
    }

    tambahMaskapai(maskapai) {
        this.daftarMaskapai.push(maskapai);
    }

    static hitungTotalKapasitas(bandara) {
        const total = bandara.daftarTerminal.reduce(
            (sum, terminal) => sum + terminal.kapasitas, 0
        );
        return total;
    }

    static cariMaskapai(bandara, kodeMaskapai) {
        return bandara.daftarMaskapai.find(
            (maskapai) => maskapai.kodeMaskapai === kodeMaskapai
        ) || null;
    }

    static ringkasan(bandara) {
        console.log(`[RINGKASAN] ${bandara.nama}: ${bandara.daftarTerminal.length} terminal, kapasitas ${Bandara.hitungTotalKapasitas(bandara)} penumpang, ${bandara.daftarMaskapai.length} maskapai.`);
    }
}

class Penumpang {
    static totalPenumpang = 0;

    constructor(nama, tujuan) {
        this.nama = nama;
        this.tujuan = tujuan;
        this.maskapai = null;
        Penumpang.totalPenumpang;
    }

    pesanTiket(maskapai) {
        this.maskapai = maskapai;

        console.log(`[TIKET] ${this.nama} memesan tiket ${maskapai.nama} (${maskapai.kodeMaskapai}) tujuan ${this.tujuan}.`);
    }
}

const bandara1 = new Bandara("Bandara Nusantara");

bandara1.bangunTerminal("T1", 1500);
bandara1.bangunTerminal("T2", 2500);
bandara1.bangunTerminal("T3", 800);

const bandara2 = new Bandara("Bandara Cakrawala");

bandara2.bangunTerminal("C1", 1000);

const maskapai1 = new Maskapai("Elang Air", "EA");
const maskapai2 = new Maskapai("Rajawali Jet", "RJ");

bandara1.tambahMaskapai(maskapai1);
bandara1.tambahMaskapai(maskapai2);
bandara2.tambahMaskapai(maskapai2);

const penumpang1 = new Penumpang("Dewi", "Denpasar");
const hasil = Bandara.cariMaskapai(bandara1, "EA");

penumpang1.pesanTiket(hasil);

const cari = Bandara.cariMaskapai(bandara1, "ZZ");

if (cari === null) {
    console.log("[INFO] Maskapai dengan kode ZZ tidak tersedia.");
}

Bandara.ringkasan(bandara1);
Bandara.ringkasan(bandara2);

console.log("Total Bandara:", Bandara.totalBandara);
console.log("Total Penumpang:", Penumpang.totalPenumpang);