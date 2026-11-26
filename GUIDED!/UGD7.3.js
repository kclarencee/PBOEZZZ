class Pecahan {
    constructor(p, q) {
        this.pembilang = p;
        this.penyebut = q;
    }

    add(x) {
        return new Pecahan(
            this.pembilang * x.penyebut + this.penyebut * x.pembilang,
            this.penyebut * x.penyebut
        );
    }

    toString() {
        return `${this.pembilang}/${this.penyebut}`;
    }
}

const a = new Pecahan(1, 2);
const b = new Pecahan(1, 3);

const hasil = a.add(b);

console.log(a.add(b).toString());
