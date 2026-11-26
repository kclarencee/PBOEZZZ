class Karakter {
    constructor(nama, role) {
        this.nama = nama;
        this.role = role;
    }

    serang() {
        console.log("Karakter melakukan serangan dasar.");
    }

    gunakanSkill() {
        console.log("Karakter menggunakan skill khusus.");
    }
}

class Penyihir extends Karakter {
    constructor(nama) {
        super(nama);
        this.nama = nama;
        this.role = "Mage";
    }

    serang() {
        console.log(`Penyihir ${this.nama} menembakkan bola api!`);
    }

    gunakanSkill() {
        console.log(`Penyihir ${this.nama} mengeluarkan sihir badai salju!`);
    }
}

class Ksatria extends Karakter {
    constructor(nama) {
        super(nama);
        this.nama = nama;
        this.role = "Tank";
    }

    serang() {
        console.log(`Ksatria ${this.nama} menebas musuh dengan pedang!`);
    }

    gunakanSkill() {
        console.log(`Ksatria ${this.nama} menggunakan skill perisai pelindung!`);
    }
}

const karakter = new Karakter("Karakter", "Fighter");
const penyihir = new Penyihir("Gandalf");
const ksatria = new Ksatria("Arthur");

karakter.serang();
karakter.gunakanSkill();

console.log();

penyihir.serang();
penyihir.gunakanSkill();

console.log();

ksatria.serang();
ksatria.gunakanSkill();