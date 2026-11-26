class Pelayan {
    catatPesanan(...args) {
        if (args.length === 1) {
            return `Memesan 1 porsi ${args[0]}`;
        } else if (args.length === 2) {
            return `Memesan ${args[1]} porsi ${args[0]}`;
        } else if (args.length === 3) {
            return `Memesan ${args[1]} porsi ${args[0]} dengan catatan: ${args[2]}`;
        }
    }
}

const pelayan = new Pelayan();

console.log(pelayan.catatPesanan("Nasi Goreng"));
console.log(pelayan.catatPesanan("Mie Ayam", 2));
console.log(pelayan.catatPesanan("Nasi Goreng", 1, "Tanpa sayur"));
