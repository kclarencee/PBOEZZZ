class MetodePembayaran {
    prosesBayar(jumlah) {
        throw new Error("Method 'prosesBayar' harus diimplementasikan oleh metode pembayaran!")
    }
}

class PembayaranTunai extends MetodePembayaran {
    prosesBayar(jumlah) {
        console.log(`Membayar tunai sebesar Rp ${jumlah} tanpa biaya admin.`)
    }
}

class PembayaranKartuKredit extends MetodePembayaran {
    prosesBayar(jumlah) {
        const admin = jumlah * 0.03

        console.log(`Membayar via Kartu Kredit sebesar Rp ${jumlah + admin} (termasuk admin 3%).`)
    }
}

class PembayaranQRIS extends MetodePembayaran {
    prosesBayar(jumlah) {
        console.log(`Membayar via QRIS sebesar Rp ${jumlah + 1000} (termasuk biaya layanan Rp 1000).`)
    }
}

function eksekusiTransaksi(metode, jumlah) {
    metode.prosesBayar(jumlah)
}

const tunai = new PembayaranTunai()
const kartuKredit = new PembayaranKartuKredit()
const qris = new PembayaranQRIS()
eksekusiTransaksi(tunai, 100000)
eksekusiTransaksi(kartuKredit, 100000)
eksekusiTransaksi(qris, 100000)