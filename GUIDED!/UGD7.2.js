
class Pekerjaan3465 {
    tugasUtama3465() {
        console.log("Tugas utama pekerjaan");
    }
}

class Dokter3465 extends Pekerjaan3465 {
    tugasUtama3465() {
        console.log("Dokter memeriksa dan mengobati pasien");
    }
}

class Guru3465 extends Pekerjaan3465 {
    tugasUtama3465() {
        console.log("Guru mengajar dan mendidik siswa");
    }
}

class Petani3465 extends Pekerjaan3465 {
    tugasUtama3465() {
        console.log("Petani menanam dan merawat tanaman");
    }
}

function tampilkanTugasUtama3465(pekerjaan) {
    pekerjaan.tugasUtama3465();
}

const dokter3465 = new Dokter3465();
const guru3465 = new Guru3465();
const petani3465 = new Petani3465();

tampilkanTugasUtama3465(dokter3465);
tampilkanTugasUtama3465(guru3465);
tampilkanTugasUtama3465(petani3465);
