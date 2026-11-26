class Karyawan {
    constructor(nama, departemen, id) {
        this.nama = nama;
        this.departemen = departemen;
        this.id = id;
        this.status = "Aktif";
    }

    ambilCuti() {
        this.status = "Cuti";
        console.log(`Karyawan "${this.nama}" sedang mengambil cuti`);
    }

    kembaliKerja() {
        this.status = "Aktif";
        console.log(`Karyawan "${this.nama}" sudah kembali bekerja`);
    }

    infoKaryawan() {
        console.log(
            `Nama: ${this.nama} | Departemen: ${this.departemen} | ID: ${this.id}`
        );
    }

    statusKerja() {
        console.log(`Status karyawan ${this.nama}: ${this.status}`);
    }
}

const karyawan1 = new Karyawan("kent", "Programmer", "B001");
const karyawan2 = new Karyawan("sugeng", "Manager", "B002");
const karyawan3 = new Karyawan("jarwo", "Keuangan", "B003");

console.log("=== CUTI KARYAWAN ===");

karyawan1.ambilCuti();
karyawan2.ambilCuti();

console.log("=== KEMBALI KERJA ===");

karyawan3.kembaliKerja();

console.log("=== INFORMASI KARYAWAN ===");

karyawan1.infoKaryawan();
karyawan2.infoKaryawan();
karyawan3.infoKaryawan();

console.log("=== STATUS KERJA ===");

karyawan1.statusKerja();
karyawan2.statusKerja();
karyawan3.statusKerja();