
class HitungLuas3465 {
    luas() {
        if (arguments.length === 1) {
            console.log("Luas persegi: " + (arguments[0] * arguments[0]));
        } else if (arguments.length === 2) {
            console.log("Luas persegi panjang: " + (arguments[0] * arguments[1]));
        } else {
            console.log("Jumlah parameter tidak sesuai.");
        }
    }
}

const hitung3465 = new HitungLuas3465();

hitung3465.luas(5);
hitung3465.luas(6, 4);
hitung3465.luas(2, 3, 4);
