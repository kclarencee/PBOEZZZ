class RekeningBank {
    constructor(noRek, saldo) {
        if (new.target === RekeningBank) {
            throw new Error("RekeningBank adalah kelas abstrak!");
        }

        this.noRek = noRek;
        this.saldo = saldo;
    }

    hitungBunga3465() {
        throw new Error("Metode hitungBunga() harus diimplementasikan!");
    }

    setor3465(jumlah) {
        this.saldo += jumlah;
        console.log(`Setor Rp${jumlah} ke ${this.noRek}, saldo: Rp${this.saldo}`);
    }

    info3465() {
        console.log(`${this.constructor.name} ${this.noRek} - saldo Rp${this.saldo} - bunga Rp${this.hitungBunga3465()}`);
    }
}

class Tabungan extends RekeningBank {
    hitungBunga3465() {
        return this.saldo * 0.02;
    }
}

class Deposito extends RekeningBank {
    constructor(noRek, saldo, tenorBulan) {
        super(noRek, saldo);
        this.tenorBulan = tenorBulan;
    }

    hitungBunga3465() {
        return this.saldo * 0.05 * this.tenorBulan / 12;
    }
}

try {
    const rekening = new RekeningBank("1001", 2000000);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

const tabungan1 = new Tabungan("1001", 2000000);
const tabungan2 = new Tabungan("1002", 1000000);
const deposito1 = new Deposito("2001", 10000000, 6);

tabungan1.setor3465(500000);

tabungan1.info3465();
tabungan2.info3465();
deposito1.info3465();