    class Bioskop {
        pesanTiket(...args) {
            var tiket1 = function (nama,film){
                return console.log(`${nama} memesan tiket film ${film}`)
            }
            var tiket2 = function (nama,film,jamTayang) {
                return console.log(`${nama} memesan tiket film ${film} untuk jam ${jamTayang}`)
            }
            var tiket3 = function (nama,film,jamTayang,jumlahTiket) {
                return console.log(`${nama} memesan tiket film ${film} untuk jam ${jamTayang} sejumlah ${jumlahTiket} tiket`)
            }
        if (args.length === 2){
            return tiket1(args[0],args[1])
        } else if(args.length === 3) {
            return tiket2(args[0], args[1], args[2]);
        } else if(args.length === 4) {
            return tiket3(args[0], args[1], args[2], args[3]);
        }
      }
   }

   const loket = new Bioskop ()
   loket.pesanTiket("andi", "laskar pelangi")
   loket.pesanTiket("rina", "pengabdi setan", "19.30")
   loket.pesanTiket("budi", "AVENGER", "13.00", 3)