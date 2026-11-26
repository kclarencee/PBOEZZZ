class TolRFID {
    potongTarif(transaksi) {
        console.log(`[RFID TAP] memotong saldo kartu golongan ${transaksi.golongan} sebesar Rp ${transaksi.biaya} via sensor antena.`);
    }
}

class TolOnBoardUnit {
    potongTarif(transaksi) {
        console.log(`[OBU SENSOR] mendeteksi transponder mobil golongan ${transaksi.golongan}, memotong debit Rp ${transaksi.biaya} otomatis.`);
    }
}

class ReaderTolMacet {
    gesekKarcis(transaksi) {
        console.log("membaca karcis tol.");
    }
}

function prosesGerbangTol(pembacaKartu, dataBiaya, golonganKendaraan) {
    let palangTolTerangkat = false;

    try {
        palangTolTerangkat = true;
        console.log("[PALANG TOL] motor hidrolik aktif, palang gerbang terangkat ke atas.");

        if (typeof dataBiaya === "object") {
            throw new Error("format tarif tol tidak terbaca oleh sistem!");
        }

        let biayaValid = Number(dataBiaya);

        if (Number.isNaN(biayaValid)) {
            throw new Error("format tarif tol tidak terbaca oleh sistem!");
        }

        if (biayaValid <= 0) {
            throw new Error("besaran tarif tol tidak valid (harus lebih besar dari 0)!");
        }

        let transaksi = {biaya: biayaValid,golongan: golonganKendaraan};

        pembacaKartu.potongTarif(transaksi);

        console.log("[SUKSES] pembayaran tol terverifikasi, lampu hijau menyala.");

    } catch (error) {
        console.log(`[PALANG DITAHAN] transaksi tol gagal diproses: ${error.message}`);

    } finally {
        if (palangTolTerangkat === true) {
            palangTolTerangkat = false;
            console.log("[FINALLY CLEANUP] menurunkan palang gerbang tol, menyalakan lampu merah stop, dan merekam nomor polisi ke server.");
        }
    }
}

console.log("UJI 1 - SUKSES RFID");
prosesGerbangTol(new TolRFID(),10500,"Golongan 1 (Sedan)");

console.log("UJI 2 - SUKSES OBU");
prosesGerbangTol(new TolOnBoardUnit(),"25000","Golongan 3 (Truk)");

console.log("UJI 3 - GAGAL VALIDASI");
prosesGerbangTol(new TolRFID(),[5000, 10000],"Golongan 1");

console.log("UJI 4 - GAGAL DUCK TYPING");
prosesGerbangTol(new ReaderTolMacet(),17000,"Golongan 1");