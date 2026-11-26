class Perangkat_3465{
    constructor(Nama_3465,Tahun_3465){
        this.Nama_3465 = Nama_3465;
        this.Tahun_3465 = Tahun_3465;
    }
    info_3465(){
        console.log(`${this.Nama_3465} diproduksi tahun ${this.Tahun_3465}`)
    }
}

class laptop_3465 extends Perangkat_3465{
    constructor(Nama_3465,Tahun_3465,Processor_3465){
        super(Nama_3465,Tahun_3465)
        this.Processor_3465 = Processor_3465;
    }
    menyalakan_3465(){
        console.log(`${this.Nama_3465} menggunakan processor ${this.Processor_3465}`)
    }
}

class Gaminglaptop extends laptop_3465{
    constructor(Nama_3465,Tahun_3465,Processor_3465,KartuGrafis_3465){
    super(Nama_3465,Tahun_3465,Processor_3465)
    this.KartuGrafis_3465 = KartuGrafis_3465;
    }
    bermaingame_3465(){
        console.log(`${this.Nama_3465} menggunakan kartu grafis ${this.KartuGrafis_3465} ${this.Processor_3465} untuk bermain game`)
    }
}

const laptop1 = new laptop_3465('asus', 2023, 'intel core 5')
const laptop2 = new laptop_3465('HP', 2022, 'intel core 3')
const laptop3 = new Gaminglaptop('LOQ',2025,'Ryzen 9','RTX 10000')
const laptop4 = new Gaminglaptop('TUF',2024,'INTEL CORE 9','RTX 9000')


console.log("=== Objek Laptop ===")
laptop1.info_3465()
laptop1.menyalakan_3465()

laptop2.info_3465()
laptop2.menyalakan_3465()

console.log("=== Objek gaming laptop ===")
laptop3.info_3465()
laptop3.menyalakan_3465()
laptop3.bermaingame_3465()

laptop4.info_3465()
laptop4.menyalakan_3465()
laptop4.bermaingame_3465()