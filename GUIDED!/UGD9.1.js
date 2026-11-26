let statusBuffer = 1024;
console.log(statusBuffer, typeof statusBuffer);

statusBuffer = "BUFFER_SIAP_DIPROSES";
console.log(statusBuffer, typeof statusBuffer);

statusBuffer = {operator: "Radiolog C", resolusiDpi: 600, kontrasTinggi: true};
console.log(statusBuffer, typeof statusBuffer);

class ScannerRontgen {
    analisisCitra(berkas) {
        console.log(`[RONTGEN] memindai kerapatan tulang pasien ${berkas.pasien} dengan ukuran file ${berkas.ukuranMb} MB.`);
    }
}

class ScannerMRI {
    analisisCitra(berkas) {
        console.log(`[MRI] memetakan rekonstruksi jaringan lunak pasien ${berkas.pasien} dengan ukuran file ${berkas.ukuranMb} MB.`);
    }
}

class SensorKameraRusak {
    laporkanLensaMacet() {
        console.log("[FAULT] sensor optik tertutup partikel debu!");
    }
}

function jalankanDiagnostik(modulScanner, berkas) {
    try {
        if (typeof berkas !== "object" | berkas === null) {
            throw new Error("berkas pemindaian tidak valid: data harus bertipe objek!");
        }

        if (typeof berkas.ukuranMb !== "number" | berkas.ukuranMb <= 0) {
            throw new Error("pemindaian ditolak: ukuran berkas citra harus bernilai positif!");
        }

        modulScanner.analisisCitra(berkas);

    } catch (error) {
        console.log("[DIAGNOSTIK GAGAL] prosedur pemindaian dibatalkan: " + error.message);

    } finally {
        console.log("[CLEANUP RADIOLOGI] menutup emisi tabung sinar, merilis buffer memori RAM, dan mencatat log keselamatan radiasi.");
    }
}

console.log("UJI 1 - SUKSES RONTGEN");
jalankanDiagnostik(new ScannerRontgen(), {pasien: "Hendra Wijaya",ukuranMb: 15});

console.log("UJI 2 - SUKSES MRI");
jalankanDiagnostik(new ScannerMRI(), {pasien: "Siti Aminah",ukuranMb: 120});

console.log("UJI 3 - GAGAL VALIDASI TIPE");
jalankanDiagnostik(new ScannerRontgen(), "File_Foto_Rontgen_Dada.jpg");

console.log("UJI 4 - GAGAL DUCK TYPING");
jalankanDiagnostik(new SensorKameraRusak(), {pasien: "Bambang",ukuranMb: 25});