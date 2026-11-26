class KalkulatorC {
    berhitung(operasi, ...args) {
        if (operasi === "MAX") {
            return this.cariMaxOverload(...args);
        } else if (operasi === "MIN") {
            return this.cariMinOverload(...args);
        } else {
            throw new Error("Simbol operasi tidak didukung.");
        }
    }

    cariMaxOverload(...args) {
        var max2 = function (a, b) {
            return Math.max(a, b);
        };

        var max3 = function (a, b, c) {
            return Math.max(a, b, c);
        };

        var max4 = function (a, b, c, d) {
            return Math.max(a, b, c, d);
        };

        if (args.length === 2) {
            return max2(args[0], args[1]);
        } else if (args.length === 3) {
            return max3(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return max4(args[0], args[1], args[2], args[3]);
        }
    }

    cariMinOverload(...args) {
        var min2 = function (a, b) {
            return Math.min(a, b);
        };

        var min3 = function (a, b, c) {
            return Math.min(a, b, c);
        };

        var min4 = function (a, b, c, d) {
            return Math.min(a, b, c, d);
        };

        if (args.length === 2) {
            return min2(args[0], args[1]);
        } else if (args.length === 3) {
            return min3(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return min4(args[0], args[1], args[2], args[3]);
        }
    }
}

const calc = new KalkulatorC();

console.log("=== CARI NILAI TERBESAR ===");
console.log(calc.berhitung("MAX", 10, 20));
console.log(calc.berhitung("MAX", 10, 50, 30));
console.log(calc.berhitung("MAX", 10, 5, 80, 40));
console.log("=== CARI NILAI TERKECIL ===");
console.log(calc.berhitung("MIN", 100, 20));
console.log(calc.berhitung("MIN", 100, 15, 50));
console.log(calc.berhitung("MIN", 100, 90, 80, 5));